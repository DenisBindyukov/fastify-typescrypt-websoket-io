import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function index(fastify: FastifyInstance) {

    fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Hello World'})
    })
}