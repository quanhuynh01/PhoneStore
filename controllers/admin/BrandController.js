const Brand = require('../../models/Brand');

//get view brand
exports.brandViewList = async (req,res)=>{
    const lsBrand = await Brand.findAll(); // Chờ kết quả trả về từ DB 
    res.render('admin/Brand/Brand',{layout:'admin/layouts/mainAdmin',data:lsBrand});
}

//get data Brand
exports.getBrand = async (req, res) => {
    try {
        const lsBrand = await Brand.findAll(); // Chờ kết quả trả về từ DB 
        res.status(200).json({ data: lsBrand }); // Gửi dữ liệu JSON về client
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
