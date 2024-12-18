const Brand = require('../../models/Brand');

//get view brand
exports.brandViewList = async (req,res)=>{
    const lsBrand = await Brand.findAll(); 
    res.render('admin/Brand/Brand',{layout:'admin/layouts/mainAdmin',data:lsBrand});
}

//get data Brand
exports.getBrand = async (req, res) => {
    try {
        const lsBrand = await Brand.findAll();
        res.status(200).json({ data: lsBrand });
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete data brand
exports.deleteBrand = async (req, res) => { 
    try {
        const brandId = req.params.id;  // Lấyid từ tham số
        const result = await Brand.destroy({
            where: { 
                BrandId: brandId 
            }
        }); 
        if (result === 0) {
            return res.status(404).json({ message: 'Không tìm thấy thương hiệu để xóa.' });
        } 
        res.status(200).json({ message: 'Xóa thành công!', success: true });
    } catch (error) {
        console.error('Lỗi khi xóa thương hiệu:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi nội bộ' });
    }
};