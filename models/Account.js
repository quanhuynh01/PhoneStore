const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');

const Account = sequelize.define('Accounts', {
    AccountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    PasswordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,  // Gán giá trị mặc định nếu không có giá trị truyền vào
    },
});
Account.hasMany(Order, {
    foreignKey: "AccountId",
    as: "orders",
});


module.exports = Account;
