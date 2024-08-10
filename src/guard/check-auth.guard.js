import { jwtKey } from "../config/jwt.config.js";
import { NotFoundException } from "../exceptions/not-found.exception.js";
import { verifyToken } from "../helper/jwt.helper.js";

export const CheckAuthGuard = (isAuth) => {
  return (req, res, next) => {
    if (!isAuth) {
      req.role = "user";
      next();
      return ;
    }

    const bearerToken = req.headers["authorization"];

    if (
      !bearerToken ||
      !bearerToken.startsWith("Bearer ") ||
      !bearerToken.split("Bearer ")[1]
    ) {
      throw new NotFoundException("Unauthorized error");
    }

    const accessToken = bearerToken.split("Bearer ")[1];
    const response = verifyToken(accessToken, jwtKey);
    req.userId = response.id
    req.role = response.role

    next();
  };
};
