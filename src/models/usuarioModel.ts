import { DataTypes } from 'sequelize';
import db from '../database/db';

const usuarioModel = db.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default usuarioModel;
