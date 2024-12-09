exports.dashBoard = (req, res) => {
    const user = req.user;
    console.log(user);
    
    const message = `Xin chào ${user.email}, bạn đã quay trở lại!`;   
    res.render("admin/dashboard", { message: message });
};
