import jwt from "jsonwebtoken";

import {
  jwtKey,
  jwtKeyExpire,
  jwtRefreshKey,
  jwtRefreshKeyExpire,
} from "../config/jwt.config.js";
import { AccessTokenError } from "../exceptions/access-token.exception.js";
import jwtObject from "../config/jwt.config.js";

export const signToken = (data) => {
    return jwt.sign(data, jwtObject.jwtKey ,{
        expiresIn:jwtObject.jwtKeyExpire
    })
}

export const signRefreshToken = (data) => {
    return jwt.sign(data, jwtObject.jwtRefreshKey, {
        expiresIn:jwtObject.jwtRefreshKeyExpire
    })
}

export const verifyToken = (token, secretKey) => {
    let response = null

    jwt.verify(token, secretKey , (err, decoded) => {
        if (decoded) {
            response = decoded
        }e
        if (err instanceof jwt.TokenExpiredError) {
            throw new AccessTokenError("Token is expired");
        }
        if (err instanceof jwt.NotBeforeError) {
            throw new AccessTokenError("Token is used before signed");
        }
        if (err instanceof jwt.JsonWebTokenError) {
            throw new AccessTokenError("Token is invalid")
        }
        
    })
    return response
}
