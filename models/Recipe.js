const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Recipe = db.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER, 
    allowNull: false
  }
}, {
  timestamps: true // 
});


Recipe.associate = (models) => {
  Recipe.belongsTo(models.Category, {
    foreignKey: 'categoryId',
    as: 'category'
  });
};

module.exports = Recipe;