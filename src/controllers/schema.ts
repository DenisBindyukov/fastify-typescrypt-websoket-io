import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function schema(fastify: FastifyInstance) {

    fastify.post('/register', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                        minLength: 4,
                        maxLength: 10
                    },
                    password: {
                        type: 'string',
                        minLength: 8,
                        maxLength: 15
                    },
                    lastName: {
                        type: 'string',
                        minLength: 0,
                        maxLength: 15
                    },
                    firstName: {
                        type: 'string',
                        minLength: 5,
                        maxLength: 15
                    },
                    sex: {
                        type: 'string',
                        enum: ['M', 'W']
                    },
                    age: {
                        type: 'integer'
                    }
                },
                required: [
                    'username',
                    'password',
                    'lastName',
                    'firstName'
                ]
            },
        }
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Hello World'});
    });

    fastify.get('/info/:userId', {
        schema: {
            params: {
                properties: {
                    userId: {
                        type: 'integer'
                    }
                }
            }
        }
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'User info'});
    });

    // ?query=xxx&limit=208&offset=0
    fastify.get('/search', {
        schema: {
            querystring: {
                properties: {
                    query: {
                        type: 'string',
                        minLength: 3
                    },
                    limit: {
                        type: 'integer'
                    },
                    offset: {
                        type: 'integer'
                    }
                },
                required: [
                    'query'
                ]
            }
        }
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Search done!'});
    });


    fastify.get('/info', {
        schema: {
            headers: {
                properties: {
                    'x-fastify-token': {
                        type: 'string'
                    },
                    authorization: {
                        type: 'string'
                    }
                },
                required: ['x-fastify-token']
            }
        }
    }, async (req: FastifyRequest, reply: FastifyReply) => {

        const headers: any = req.headers;

        console.log(headers);
         const token = headers['x-fastify-token'];
        reply.send({ok: true, token});
    });
};