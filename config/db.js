const { Sequelize } = require("sequelize");
require('dotenv').config();

//connect db 
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false // Tắt log SQL
});

sequelize.authenticate()
.then(()=>{
    console.log('Kết nối CSDL thành công');
    
})
.catch(()=>{
    console.log('Kết nối CSDL thất bại');
    
});

module.exports = sequelize;