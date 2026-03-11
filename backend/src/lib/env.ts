import dotenv from "dotenv"
dotenv.config();
export const ENV ={
    port : process.env.PORT,
    database : process.env.DATABASE_URL,
    NODE_ENV : process.env.NODE_ENV
}