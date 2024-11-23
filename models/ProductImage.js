const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ProductImage= sequelize.define('ProductImages',{
    ImageId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true,
    },
    PhoneId:{
        type:DataTypes.INTEGER, 
        allowNull:false, 
    },
    ImageURL:{
        type:DataTypes.STRING, 
        allowNull:false, 
    },
    IsPrimary:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});
module.exports = ProductImage;