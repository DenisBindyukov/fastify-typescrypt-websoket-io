import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function demo(fastify: FastifyInstance) {

    fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Demo GET'});
    });

    fastify.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Demo POST'});
    });

    fastify.post('/user', async (req: FastifyRequest, reply: FastifyReply) => {
        const body: any = req.body
        const username: string = body.username
        const password: string = body.password
        reply.send({username, password});
    });

    // http: localhost:3000/demo/Denis/Bindyukov
    fastify.get('/user:firstName/:lastName', async (req: FastifyRequest, reply: FastifyReply) => {
        const params: any = req.params
        const firstName: string = params.firstName
        const lastName: string = params.lastName
        reply.send({firstName, lastName});
    });


}