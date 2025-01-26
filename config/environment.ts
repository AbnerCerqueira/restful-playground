import { config } from "dotenv";

config();

export const api = {
  host: String(process.env.HOST),
  port: Number(process.env.PORT),
};

export const database = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  db: process.env.MYSQL_DATABASE,
}
