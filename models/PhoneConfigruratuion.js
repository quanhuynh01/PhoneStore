const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const PhoneConfiguration=  sequelize.define('PhoneConfigurations',{
    ConfigurationId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true,
    },
    PhoneId:{
        type:DataTypes.INTEGER, 
        allowNull:false, 
    },
    RAM:{
        type:DataTypes.INTEGER, 
        allowNull:true, 
    },
    Storage:{
        type:DataTypes.INTEGER, 
        allowNull:true, 
    },
    Price:{
        type:DataTypes.DOUBLE, 
        allowNull:true, 
    },
    DiscountPrice:{
        type:DataTypes.DOUBLE, 
        allowNull:true, 
    },
    IsDefault :{
        type:DataTypes.BOOLEAN, 
        allowNull:true, 
    }
});
 

module.exports = PhoneConfiguration;
