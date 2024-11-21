//trang chủ
exports.Index = (req, res) => {
        let title = "Trang chủ mini ";
    let desc = "Điện thoại giá rẻ "
    res.render("user/index",{title,desc});  
};