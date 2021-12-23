import {FastifyInstance} from "fastify";


import indexRoute from './controllers/index';
import demoRoute from './controllers/demo';

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexRoute, {prefix: '/'}); // http://localhost:3000/
    fastify.register(demoRoute, {prefix: '/demo'}); // http://localhost:3000/demo
}