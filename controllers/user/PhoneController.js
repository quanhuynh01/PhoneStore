exports.getViewPhone = async (req,res)=>{
    let title = "Phone Store";
    let desc = "Điện thoại giá rẻ ";
    res.render('user/phone/phone',{
        title,
        desc,
        layout:'user/layouts/main'});
}