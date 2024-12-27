const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Phone = require("./Phone");
 
const Category = sequelize.define('Categories', {
    CategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    CategoryName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Icon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Alias: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Show: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    ParentCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Categories', // Tham chiếu tới bảng Categories
            key: 'CategoryId'
        }
    },
    Level: {
        type: DataTypes.INTEGER, // Trường này lưu độ sâu trong phân cấp
        allowNull: true
    }
});


// Define relationships
Category.hasMany(Phone, {
    foreignKey: 'CategoryId',
    as: 'CategoryPhone'
});

Category.hasMany(Category, {
    foreignKey: 'ParentCategoryId',
    as: 'Subcategories' // Aliasing the child categories
});

Category.belongsTo(Category, {
    foreignKey: 'ParentCategoryId',
    as: 'ParentCategory' // Aliasing the parent category
});

module.exports = Category;
