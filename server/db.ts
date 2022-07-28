import { Sequelize, Model, DataTypes } from 'sequelize';
import 'dotenv/config';

const host = String(process.env.POSTGRES_HOST);
const user = String(process.env.POSTGRES_USER);
const db = String(process.env.POSTGRES_DB);
const password = String(process.env.POSTGRESS_PASSWORD);
const port = Number(process.env.POSTGRESS_PORT);
const pr_key = String(process.env.PRIVATE_KEY);

const sequelize = new Sequelize(db, user, password, {
  dialect: 'postgres',
  port: port,
  host: host,
});
export default sequelize;