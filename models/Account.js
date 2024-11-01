
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Account = sequelize.define('Accounts', {
    AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true //thuộc tính tự động tăng
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PasswordHash: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    PhoneNumber:{
        type: DataTypes.STRING,
        allowNull: true
    },Address:{
        type: DataTypes.STRING,
        allowNull: true
    },
    Role:{
        type: DataTypes.STRING, //'Admin' or 'User
        allowNull: false
    },
    Status:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:true
    }
});

module.exports=Account;