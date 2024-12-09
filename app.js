require('dotenv').config();

const sequelize = require('./config/db');
const express = require('express');
const cookieParser = require('cookie-parser');

const Accounts = require('./models/Account');
const Brands = require('./models/Brand');
const Categories= require('./models/Category');
const Roles= require('./models/Role');
const Phone= require('./models/Phone');
const PhoneConfiguration= require('./models/PhoneConfigruratuion');

const slug = require('./helper/slug');

const userRoute = require('./routes/userRoutes'); 
const adminRoute = require('./routes/adminRoutes');
const bodyParser = require('body-parser');
var cors = require('cors');



const app = express(); 

const port = 3000; 
app.use(cors());
// Middleware cho cookie-parser
app.use(cookieParser());


//cấu hình Middlewaređể phân tích cú pháp JSON  
app.use(bodyParser.json()); 
// Middleware để phân tích cú pháp URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

//cấu hình sử dụng static public file
app.use('/public',express.static(__dirname + '/public'));
 
//cấu hình sử dụng ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/',userRoute); 
app.use('/admin',adminRoute); 

//*CHÚ Ý SỬ DỤNG USE*//


 

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            
console.log(slug("Tiêu đề Bài Viết: Một ngày đẹp trời!"));

        });
    })
    .catch((err) => {
        console.log('Đồng bộ CSDL thất bại' + err);
    });
