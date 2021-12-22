import fastify from "fastify";

const server = fastify()

server.get('/', (req: any, reply: any) => {
    reply.send('Hello world')
})


server.listen(3000, '127.0.0.1', (error: any, address: any) => {
    if (error) {
        console.log(error)
        process.exit(0)
    } else {
        console.log('Server listening at ' + address)
    }
})

