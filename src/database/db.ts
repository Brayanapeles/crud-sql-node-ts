import 'dotenv/config';
import { Sequelize } from 'sequelize';

const db = new Sequelize('crud_ts', 'root', 'bcd123', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});

export default db;
