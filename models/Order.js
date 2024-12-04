const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Account = require('./Account'); 

const Order = sequelize.define('Orders',{
    OrderId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    OrderStatus:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    TotalAmount:{
        type:DataTypes.DOUBLE, 
        allowNull:false
    },
    OrderDate:{
        type:DataTypes.DATE,
        allowNull:false
    }, 
    Draft:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    AccountId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
})
module.exports = Order;