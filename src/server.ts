import { buildApp } from '../src/app';
import dotEnv from 'dotenv';


dotEnv.config();

const start = async () => {
    const app = buildApp();
    const port = process.env.SERVER_PORT;
    try {
        await app.listen({ port: Number(port) });
        console.log(`Server running at port: ${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

start();