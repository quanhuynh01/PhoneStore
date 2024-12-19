const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware 
const verifyAdmin = (req, res, next) => {
    const token = req.cookies['jwtToken'];  

    if (!token) {
        // Kiểm tra yêu cầu nếu là API
        if (req.headers.accept && req.headers.accept.includes('application/json')) {
            return res.status(400).json({ message: 'Phản hồi không thành công' });
        }
        // Trả về trang HTML
        return res.status(400).render('statusCode/400', { message: 'Phản hồi không thành công' ,layout:false});
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {  
        if (err) {
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
                return res.status(401).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });
            }
            return res.status(401).render('statusCode/401', { message: 'Token không hợp lệ hoặc đã hết hạn',layout:false });
        }  

        if (user.role !== 'Admin' && user.role !== 'Super Admin') {
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
                return res.status(403).json({ message: 'Bạn không có quyền truy cập vào tài nguyên này' });
            }
            return res.status(403).render('statusCode/403', { message: 'Bạn không có quyền truy cập vào tài nguyên này',layout:false });
        } 
        req.user = user;
        next();
    });
};

module.exports = verifyAdmin;
