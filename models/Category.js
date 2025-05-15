const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Category = db.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

Category.associate = (models) => {
    Category.hasMany(models.Recipe, {
      foreignKey: 'categoryId',
      as: 'recipes'
    });
  };

module.exports = Category;