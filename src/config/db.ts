import { Pool } from 'pg';
import dotEnv from 'dotenv';

dotEnv.config();

export const pool = new Pool({
    host: process.env.HOST,
    port: Number(process.env.PORT),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});