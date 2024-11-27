const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Account = require('./Account'); // Đồng nhất tên


const Role = sequelize.define('Role', {
    RoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    RoleName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
  
Role.hasMany(Account, {
    foreignKey: "RoleId",
    as: "accounts",
});

module.exports = Role;
