const sequelize = require('./config/db');
const express = require('express');
const Accounts = require('./models/Account');
const Brands = require('./models/Brand');
const Categories= require('./models/Category')
const app = express();

const port = 3000;

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });
    })
    .catch((err) => {
        console.log('Đồng bộ CSDL thất bại' + err);
    });
