import mongoose from "mongoose";
import dbconfig from "../config/mongo.config.js";


export async function mongo() {
  await mongoose.connect(dbconfig.database_url);
}
