exports.dashBoard = (req, res) => {
    const user = req.user; 
    const message = `Xin chào ${user.email}, bạn đã quay trở lại!`; 
    res.render("admin/dashboard", {
        message: message,
        layout: 'admin/layouts/mainAdmin'
    });
};
