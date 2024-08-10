import { User } from "./auth.schema.js";
import { signToken, signRefreshToken } from "../../helper/jwt.helper.js";

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
}

export default new AuthService();
