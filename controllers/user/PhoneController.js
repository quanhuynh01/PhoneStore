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
        res.status(200).json({ slug });
    } catch (error) {
        console.error("Lỗi khi xử lý danh mục:", error);
        res.status(500).send("Có lỗi xảy ra khi xử lý danh mục.");
    }
}