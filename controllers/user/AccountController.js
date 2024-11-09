//note Công dụng của body-parser
//Phân tích cú pháp JSON,  chủ yếu được sử dụng cho JSON và URL-encoded
//body-parser sẽ phân tích cú pháp và chuyển đổi nó thành một đối tượng JavaScript có thể sử dụng được trong req.body 
//npm install body-parser 
const Account = require('../../models/Account');

exports.LoginView = (req, res) => {
    res.render('user/account/login');
}
exports.RegisterView = (req, res) => {
    res.render('user/account/register');
}

exports.handleRegisterPost = async (req, res) => {
    //console.log(req.is()); // Kiểm tra kiểu dữ liệu

    // Kiểm tra  header ? application/json' : application/x-www-form-urlencoded
    const isJsonRequest = req.headers.accept && req.headers.accept.includes('application/json');

    const { FullName, Email, PasswordHash, PhoneNumber, Address, Status } = req.body;

    try {
        const newAccount = await Account.create({
            FullName,
            Email,
            PasswordHash,
            PhoneNumber,
            Address,
            Role: 'User',
            Status,
        });

        //nếu yêu cầu Json API 
        if (isJsonRequest) {
            return res.status(201).json({ message: 'Tạo tài khoản thành công!', account: newAccount });
        }

        return res.status(201).json({ message: 'Tạo tài khoản thành công!', account: newAccount });


    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Có lỗi xác thực.', errors: error.errors });
        }
        return res.status(500).json({ message: 'Có lỗi xảy ra khi tạo tài khoản.', error: error.message });
    }
}; 
