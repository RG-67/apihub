import dotEnv from 'dotenv';
import Redis from 'ioredis';


dotEnv.config();


export const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
})