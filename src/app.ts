import fastify from 'fastify';
import dbPlugin from '../src/plugins/db';
import authRoutes from './modules/auth/auth.routes';




export const buildApp = () => {
    const app = fastify({ logger: true });

    app.register(dbPlugin);
    app.register(authRoutes, { prefix: 'api/v1/auth' });

    return app;
}