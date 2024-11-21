const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./Account'); 

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
  
Role.hasMany(User, {
    foreignKey: "RoleId",
    as: "accounts",
});

module.exports = Role;
