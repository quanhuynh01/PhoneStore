//note Công dụng của body-parser
//Phân tích cú pháp JSON,  chủ yếu được sử dụng cho JSON và URL-encoded
//body-parser sẽ phân tích cú pháp và chuyển đổi nó thành một đối tượng JavaScript có thể sử dụng được trong req.body 
//npm install body-parser 
const bcrypt = require('bcrypt'); //package hash password
const jwt = require('jsonwebtoken');

//model
const Account = require('../../models/Account');
const Role = require('../../models/Role');
const { where } = require('sequelize');
const SECRET_KEY = process.env.SECRET_KEY;

exports.LoginView = (req, res) => {
    res.render('user/account/login',{ title: 'Đăng nhập', layout: false });
 
}
exports.RegisterView = (req, res) => {
    res.render('user/account/register',{layout:false});
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
        PasswordHash = await bcrypt.hash(PasswordHash, 10); // 10 là số rounds cho việc hash, Số rounds càng cao bảo mật cao, thời gian thực thi cũng càng dài
        const newAccount = await Account.create({
            FullName:FullName,
            Email:Email,
            PasswordHash:PasswordHash,
            PhoneNumber:"",
            Address:"",
            Role: 1,
            Status:true,
        }); 
        
        if (isJsonRequest) {
            return res.status(201).json({ message: 'Tạo tài khoản thành công!', account: newAccount });
        }  
        return res.status(201).json({ message: 'Tạo tài khoản thành công!',status :201 }); 
    } catch (error) {
        console.error(error);   
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Có lỗi xác thực.', errors: error });
        }
        return res.status(500).json({ message: 'Có lỗi xảy ra khi tạo tài khoản.', error: error.message });
    }
};

exports.handleLoginPost = async (req,res)=>{
    const { Email, Password } = req.body;
    // Kiểm tra xem tài khoản có tồn tại không
    const userAccount = await Account.findOne({ where: { Email: Email } });
    const RoleAc = await Role.findOne({where:{ RoleId:userAccount.RoleId}})
     
    if (!userAccount) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // So sánh mật khẩu người dùng nhập với mật khẩu đã hash trong cơ sở dữ liệu
    const isPasswordValid = await bcrypt.compare(Password, userAccount.PasswordHash);//
  
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không đúng' });
    }
    //tạo token
    // Tạo mã thông báo JWT nếu đăng nhập thành công
    // Kiểm tra nếu tài khoản và mật khẩu đúng, bạn sẽ tạo token.
    if (userAccount && RoleAc) {
        const token = jwt.sign(
            { userId: userAccount.AccountId, email: userAccount.Email, role: RoleAc.RoleName }, // Payload
            SECRET_KEY, // Khóa bí mật
            { expiresIn: '1h' } // Thời gian sống của token
        ); 
        // Lưu token vào cookie
        res.cookie('jwtToken', token, {
            httpOnly: true,       // Không thể truy cập cookie từ JavaScript
            secure: true,         // Chỉ gửi cookie qua HTTPS
            sameSite: 'Strict',   // Chống CSRF
            expires: new Date(Date.now() + 3600 * 1000), // Thời gian hết hạn cookie (1 giờ)
        }); 
        return res.status(200).json({ status:200,message: 'Đăng nhập thành công',token:token });
         
    } else { 
        return res.status(401).json({
            message: 'Đăng nhập không thành công'
        });
    }
}