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
        const username: string = body.username;
        const password: string = body.password;
        reply.send({username, password});
    });

    // http: localhost:3000/demo/Denis/Bindyukov
    fastify.get('/:firstName/:lastName', async (req: FastifyRequest, reply: FastifyReply) => {
        const params: any = req.params;
        const firstName: string = params.firstName;
        const lastName: string = params.lastName;
        reply.send({firstName, lastName});
    });

    // http: localhost:3000/demo?firstName=Denis&lastName=Bindyukov
    fastify.get('/query', async (req: FastifyRequest, reply: FastifyReply) => {
        const params: any = req.query;
        const firstName: string = params.firstName;
        const lastName: string = params.lastName;
        reply.send({firstName, lastName});
    });


    fastify.put('/:userId/edit', async (req: FastifyRequest, reply: FastifyReply) => {
        const body: any = req.body;
        const username: string = body.username;
        const password: string = body.password;

        const params: any = req.params;
        const userId: any = params.userId;
        reply.send({username, password, userId});
    });


    // D = DELETE => DELETE

    fastify.delete('/:userId', async (req: FastifyRequest, reply: FastifyReply) => {
        const params: any = req.params
        const userId = params.userId

        reply.send({ok: true, userId});
    });

}