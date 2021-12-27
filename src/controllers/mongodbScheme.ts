import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

const User = require("../models/testMongodb");


export default async function mongodbScheme(fastify: FastifyInstance) {

    fastify.post('/', {
        schema: User
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        console.log("req :", req.validationError)
        try {
            const body: any = req.body;

            if (!body.age) {
                reply.code(400).send({statusCode: 1, message: "age is required"});
            }

            if (!body.name) {
                reply.code(400).send({statusCode: 1, message: "name is required"});
            } else if (body.name.length < 5) {
                reply.code(400).send({statusCode: 1, message: "min length name should be 5 symbols"});
            }

            const newUser = new User(req.body);

            await newUser.save();
            reply.code(201).send(newUser);
        } catch (error) {
            console.log(error)
            reply.code(500).send(error);
        }
    });

    fastify.get('/:userId', {
        schema: User
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const params: any = req.params;
            const userId: any = params.userId;

            const user = await User.findById(userId)
            return reply.code(200).send(user);
        } catch (error) {
            reply.code(500).send(error);
        }
    });

    fastify.get('/', {
        schema: User
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const products = await User.find();
            return products
        } catch (error) {
            reply.code(500).send(error);
        }
    });

    fastify.delete('/:userId', {
        schema: User
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const params: any = req.params
            const userId = params.userId

            await User.findByIdAndDelete(userId)
            reply.send({resultCode: 0})
        } catch (error) {
            reply.code(500).send(error);
        }
    });

    fastify.put('/', {
        schema: User
    }, async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const body: any = req.body;
            const id: string = body._id;

            const user = await User.findByIdAndUpdate(
                id,
                body,
                {new: true}
            );

            if (!user) {
                reply.code(404).send('Id not found')
            }

            reply.code(200).send(user)
        } catch (error) {
            reply.code(500).send(error)
        }
    });
};