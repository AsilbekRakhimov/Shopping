import dotenv from 'dotenv';

dotenv.config();

export const jwtKey = process.env.jwt_key

export const jwtKeyExpire = process.env.jwt_key_expire

export const jwtRefreshKey = process.env.jwt_refresh_key

export const jwtRefreshKeyExpire = process.env.jwt_refresh_key_expire