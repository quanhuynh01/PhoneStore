const sequelize = require('./config/db');
const express = require('express');
const Accounts = require('./models/Account');
const Brands = require('./models/Brand');
const Categories= require('./models/Category');
const userRoute = require('./routes/userRoutes');

const app = express(); 
const port = 3000; 

//cấu hình sử dụng static public file
app.use('/public',express.static(__dirname + '/public'));
 
//cấu hình sử dụng ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/',userRoute);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log('Đồng bộ CSDL thất bại' + err);
    });
