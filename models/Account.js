const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    },
});

module.exports = Account;
