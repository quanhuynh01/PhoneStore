const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');



const OperatingSystem = sequelize.define("OperatingSystems",{
    OperatingSystemId:{
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        type:DataTypes.INTEGER,
        unique:true
    },
    NameOS:{
        allowNull:true,
        type:DataTypes.STRING
    }
})
module.exports = OperatingSystem;