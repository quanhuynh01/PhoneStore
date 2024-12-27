const Category = require('../../models/Category');
const slug = require('../../helper/slug');



exports.getViewCategory = async (req, res) => {
    const data = await Category.findAll({
        where: { Show: true, Status: true },
        include: {
            model: Category,  // Truy vấn bản ghi danh mục cha
            as: 'ParentCategory',  // Alias của mối quan hệ
            attributes: ['CategoryName', 'CategoryId']  // Chỉ lấy các thuộc tính cần thiết của danh mục cha
        }
    });
 
    
    res.render('admin/Category/Category', { layout: 'admin/layouts/mainAdmin', data: data })
}

exports.getDataCategory = async (req, res) => {
    const data = await Category.findAll({
        where: { Show: true, Status: true }
    });
    if(data.length > 0)
    {
        res.status(200).json({success :true, data :data,message:"Lấy dữ liệu thành công"});
    }
    else if(data.length == 0)
    {
        res.status(200).json({success :true, data :data,message:"Lấy dữ liệu thành công"});
    }
    else{
        res.status(400).json({success :false, message:"Lấy dữ liệu không thành công"});
    }

};

exports.addCategory = async (req, res) => {
    try {
        
        const { categoryName, categoryDescription, StatusCategory, categoryShow} = req.body;

        const parentCategoryId = req.body.selectedCategoryParent || null;
        const level = req.body.level || null;

        // Kiểm tra nếu có file, lấy tên file tải lên
        const iconFile = req.file ? '/public/category/' + req.file.filename : null; 
         
         const category = await Category.create({
             CategoryName: categoryName,
             Description: categoryDescription,
             Slug: slug(categoryName),   
             Show: categoryShow,       
             Status: StatusCategory,     
             Icon: iconFile,
             ParentCategoryId:parentCategoryId,
             Level:level
         });


        res.status(200).json({ success: true, message: "Category added successfully!", category });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding category.' });
    }
};

