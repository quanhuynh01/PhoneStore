const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
// Middleware 
const verifyAdmin = (req, res, next) => {
    const token = req.cookies['jwtToken'];  
    if (!token) {
        return res.status(400).json({ message: 'Phản hồi không thành công' });
    } 
    // Kiểm tra tính hợp lệ của token bằng verify func
    jwt.verify(token, SECRET_KEY, (err, user) => {  
        if (err) {
            return res.status(401).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });
        }  
        if (user.role !== 'Admin' && user.role !== 'Super Admin') {
            return res.status(403).json({ message: 'Bạn không có quyền truy cập vào tài nguyên này' });
        } 
        //nếu là Admin
        req.user = user;  // Lưu thông tin người dùng vào req
        next();  // Tiếp tục tới các middleware hoặc route handler tiếp theo
    });
};

module.exports = verifyAdmin;