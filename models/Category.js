const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define('Categories',{
    CategoryId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    CategoryName:{
        type:DataTypes.STRING, 
        allowNull:true
    },
    Description:{
        type:DataTypes.STRING, 
        allowNull:true
    }
    ,
    Icon:{
        type:DataTypes.STRING, 
        allowNull:true
    }
    ,
    Alias:{
        type:DataTypes.STRING, 
        allowNull:true
    }
    ,
    Show:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    },
    Status:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:true
    } 
});

module.exports = Category;