//note Công dụng của body-parser
//Phân tích cú pháp JSON,  chủ yếu được sử dụng cho JSON và URL-encoded
//body-parser sẽ phân tích cú pháp và chuyển đổi nó thành một đối tượng JavaScript có thể sử dụng được trong req.body 
//npm install body-parser 
const bcrypt = require('bcrypt'); //package hash password
//model
const Account = require('../../models/Account');


exports.LoginView = (req, res) => {
    res.render('user/account/login');
}
exports.RegisterView = (req, res) => {
    res.render('user/account/register');
}

exports.handleRegisterPost = async (req, res) => {
   
    // Kiểm tra kiểu dữ liệu yêu cầu =>là JSON hay khác
   // console.log(req.is());

    // Kiểm tra xem header 'Accept' có chứa 'application/json' không
    //console.log(req.headers.accept.includes('application/json')); // In ra giá trị của header 'Accept'

    const isJsonRequest = req.headers.accept && req.headers.accept.includes('application/json'); //req.headers.accept.includes('application/json') có chứa application/json hay không


    const { FullName, Email, PhoneNumber, Address, Status } = req.body;
    let { PasswordHash } = req.body; 
    try {
        // Kiểm tra xem Email 
        const EmailExist = await Account.findOne({ where: { Email: Email } });

        if (EmailExist) {
            // Email đã tồn tại, trả về phản hồi
            return res.status(400).json({ message: 'Tài khoản đã tồn tại trong hệ thống Phone Store' });
        }

        
        PasswordHash = await bcrypt.hash(PasswordHash, 10); // 10 là số rounds cho việc hash, Số rounds càng cao, thời gian thực thi cũng càng dài
 
        const newAccount = await Account.create({
            FullName,
            Email,
            PasswordHash,
            PhoneNumber,
            Address,
            Role: 'User',
            Status,
        });

        // Nếu yêu cầu là JSON API
        if (isJsonRequest) {
            return res.status(201).json({ message: 'Tạo tài khoản thành công!', account: newAccount });
        } 

        return res.status(201).json({ message: 'Tạo tài khoản thành công!',status :201 });
        
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Có lỗi xác thực.', errors: error.errors });
        }
        return res.status(500).json({ message: 'Có lỗi xảy ra khi tạo tài khoản.', error: error.message });
    }
};
