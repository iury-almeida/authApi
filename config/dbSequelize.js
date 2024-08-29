import { DataTypes } from 'sequelize';
import database from './sequelize.js';

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

export default Usuario;