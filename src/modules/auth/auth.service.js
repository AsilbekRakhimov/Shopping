import { User } from "./auth.schema.js";
import { signToken, signRefreshToken, verifyToken } from "../../helper/jwt.helper.js";
import jwtObject from "../../config/jwt.config.js";

class AuthService {
  #_model;
  constructor() {
    this.#_model = User;
  }
  async signUp({ name, username, password,role }) {
    const data = await this.#_model.create({
      name,
      username,
      password,
      role: role || "user",
    });
    const token = signToken({ id: data["_id"], role: data.role });
    const refreshToken = signRefreshToken({ id: data["_id"], role: data.role });
    return { data, token, refreshToken };
  }
  async signIn({ username, password }) {
    const data = await this.#_model.find({ username, password});
    const token = signToken({ id: data[0]["_id"], role: data[0].role });
    const refreshToken = signRefreshToken({ id: data[0]["_id"], role: data[0].role });
    return {data, refreshToken, token};
  }

  async signOneRefreshToken({refreshToken}){
    const response = verifyToken(refreshToken,jwtObject.jwtRefreshKey);
    const newAccessToken = signToken({id:response.id, role: response.role})
    return newAccessToken;
  }

  
}

export default new AuthService();
