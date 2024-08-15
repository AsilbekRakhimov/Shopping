import dotenv from "dotenv";
dotenv.config();
const dbconfig = { database_url: process.env.database_url };

export default dbconfig
