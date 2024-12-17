//trang chủ
exports.Index = (req, res) => {
        let title = "Phone Store";
    let desc = "Điện thoại giá rẻ "
    res.render("user/index",{
        title,
        desc,
        layout: 'user/layouts/main'  
    });  
};