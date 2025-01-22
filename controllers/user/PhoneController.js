exports.getViewPhone = async (req,res)=>{
    let title = "Phone Store";
    let desc = "Điện thoại giá rẻ ";
    res.render('user/phone/phone',{
        title,
        desc,
        layout:'user/layouts/main'});
}
exports.getPhoneByCategory = async (req, res) => {
    const slug = req.params.slug;  
    try {
        res.render('user/phone/phoneCategory',{slug:slug, layout:'user/layouts/main',title:`Sản phẩm danh mục ${slug}`,desc:'123'});
    } catch (error) {
        console.error("Lỗi khi xử lý danh mục:", error);
        res.status(500).send("Có lỗi xảy ra khi xử lý danh mục.");
    }
}