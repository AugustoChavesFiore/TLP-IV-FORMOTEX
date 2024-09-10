import 'dotenv/config';


export const enviroments = {
    port: +process.env.PORT!,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,

} as const;