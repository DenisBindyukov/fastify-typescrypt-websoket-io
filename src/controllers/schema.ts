import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

import bodyScheme from '../schemas/body';
import queryStringScheme from '../schemas/query_string';
import headerScheme from '../schemas/header';
import paramsScheme from '../schemas/params';

export default async function schema(fastify: FastifyInstance) {

    fastify.post('/register', {
        schema: bodyScheme
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Hello World'});
    });

    fastify.get('/info/:userId', {
        schema: paramsScheme
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'User info'});
    });

    // ?query=xxx&limit=208&offset=0
    fastify.get('/search', {
        schema: queryStringScheme
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        reply.send({message: 'Search done!'});
    });


    fastify.get('/info', {
        schema: {
            headers: headerScheme
        }, attachValidation: true
    }, async (req: FastifyRequest, reply: FastifyReply) => {

        if (req.validationError) {
            console.log(req.validationError);
            reply.code(400).send({ok: false, error: 'Bad token'})
        } else {
            const headers: any = req.headers;
            if (headers['token'].length < 5) {
                reply.code(401).send('Bad token!')
            }
            console.log(headers);
            const token = headers['token'];
            reply.send({ok: true, token});
        }
    });
};