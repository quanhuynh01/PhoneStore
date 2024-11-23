const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ProductImage = require('./ProductImage');
const PhoneConfiguration = require('./PhoneConfigruratuion');
const Phone= sequelize.define('Phones',{
    PhoneId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    PhoneName:{
        type:DataTypes.STRING, 
        allowNull:true, 
    },
    BrandId:{
        type:DataTypes.INTEGER, 
        allowNull:false, 
    },
    CategoryId:{
        type:DataTypes.INTEGER, 
        allowNull:false, 
    },
    Stock:{
        type:DataTypes.INTEGER, 
        allowNull:true, 
        defaultValue:0
    },
    Description:{
        type:DataTypes.STRING, 
        allowNull:true, 
    },
    ScreenSize:{
        type:DataTypes.DOUBLE,
        allowNull:true, 
    },
    Battery:{
        type:DataTypes.DOUBLE,
        allowNull:true, 
    },
    Camera:{
        type:DataTypes.DOUBLE,
        allowNull:true, 
    },
    Warranty:{
        type:DataTypes.INTEGER,
        allowNull:false, 
    },
    Alias:{
        type:DataTypes.STRING,
        allowNull:false
    },
    IsFeatured:{
        type:DataTypes.BOOLEAN,
        allowNull:true, 
    },
    BestSeller:{
        type:DataTypes.BOOLEAN,
        allowNull:true, 
    }
})

Phone.hasMany(ProductImage,{
    foreignKey:'PhoneId',
    as:'PhoneProductImage'
});

Phone.hasMany(PhoneConfiguration, {
    foreignKey: 'PhoneId',
    as: 'PhonePhoneConfiguration'
});

module.exports = Phone;