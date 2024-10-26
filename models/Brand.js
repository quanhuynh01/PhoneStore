const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Brand  = sequelize.define('Brands',{
    BrandId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true
    },
    BrandName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    Description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    Country:{
        type:DataTypes.STRING,
        allowNull:true
    },
    Status:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false
    }
})
module.exports =  Brand;