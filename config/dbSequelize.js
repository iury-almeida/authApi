const DataTypes = require('sequelize');
const database  = require('./sequelize');

const Usuario = database.define('Usuario',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
  });

module.exports = Usuario;