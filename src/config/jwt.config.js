import dotenv from 'dotenv';

dotenv.config();
const jwtConfig = {
    jwtKey : process.env.jwt_key,
    jwtKeyExpire : process.env.jwt_key_expire,
    jwtRefreshKey : process.env.jwt_refresh_key,
    jwtRefreshKeyExpire : process.env.jwt_refresh_key_expire
}

export default jwtConfig

// export const jwtKey = process.env.jwt_key

// export const jwtKeyExpire = process.env.jwt_key_expire

// export const jwtRefreshKey = process.env.jwt_refresh_key

// export const jwtRefreshKeyExpire = process.env.jwt_refresh_key_expire