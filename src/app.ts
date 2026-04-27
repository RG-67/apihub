import fastify from 'fastify';
import dbPlugin from '../src/plugins/db';
import authRoutes from './modules/auth/auth.routes';
import UserRoute from './modules/user/user.routes';
import adminRoute from './modules/admin/admin.route';
import { apiRoute } from './modules/api/api.route';
import subscriptionRoute from './modules/subscription/subscription.route';
import { gatewayRoute } from './modules/gateway/gateway.route';




export const buildApp = () => {
    const app = fastify({ logger: true });

    app.register(dbPlugin);
    app.register(authRoutes, { prefix: 'api/v1/auth' });
    app.register(UserRoute, { prefix: 'api/v1/user' });
    app.register(adminRoute, { prefix: 'api/v1/admin' });
    app.register(apiRoute, { prefix: 'api/v1/provider' });
    app.register(subscriptionRoute, { prefix: 'api/v1/subscription' });
    app.register(gatewayRoute, { prefix: 'api/v1/gateway' })

    return app;
}