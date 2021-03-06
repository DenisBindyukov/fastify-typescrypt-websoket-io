import {FastifyInstance} from "fastify";

import schemaRouter from "./controllers/schema";
import indexRoute from './controllers/index';
import demoRoute from './controllers/demo';
import mongodbScheme from "./controllers/mongodbScheme";

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexRoute, {prefix: '/'}); // http://localhost:3000/
    fastify.register(demoRoute, {prefix: '/demo'}); // http://localhost:3000/demo
    fastify.register(schemaRouter, {prefix: '/schema'}); // http://localhost:3000/schema
    fastify.register(mongodbScheme, {prefix: '/user'}); // http://localhost:3000/schema
}