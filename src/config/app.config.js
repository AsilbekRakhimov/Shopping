import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  port: process.env.PORT,
  host: process.env.HOST,
};
