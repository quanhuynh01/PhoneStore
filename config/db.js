const { Sequelize } = require("sequelize");

//connect db 
const sequelize = new Sequelize('phonestore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
.then(()=>{
    console.log('Kết nối CSDL thành công');
    
})
.catch(()=>{
    console.log('Kết nối CSDL thất bại');
    
});

module.exports = sequelize;