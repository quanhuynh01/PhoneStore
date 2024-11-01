const sequelize = require('./config/db');
const express = require('express');
const Accounts = require('./models/Account');
const Brands = require('./models/Brand');
const Categories= require('./models/Category');
const userRoute = require('./routes/userRoutes');
console.log('User routes loaded');
const adminRoute = require('./routes/adminRoutes');
const bodyParser = require('body-parser');

const app = express(); 
const port = 3000; 
//cấu hình Middlewaređể phân tích cú pháp JSON
//  
app.use(bodyParser.json()); 
// Middleware để phân tích cú pháp URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

//cấu hình sử dụng static public file
app.use('/public',express.static(__dirname + '/public'));
 
//cấu hình sử dụng ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/',userRoute); 
app.use('/admin',adminRoute); //use sử dụng Route

//CHÚ Ý SỬ DỤNG USE

 

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log('Đồng bộ CSDL thất bại' + err);
    });
