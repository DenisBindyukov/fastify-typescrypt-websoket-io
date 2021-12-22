"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var server = (0, fastify_1.default)();
server.get('/', function (req, reply) {
    reply.send('Hello world!');
});
server.listen(8080, '127.0.0.1', function (error, address) {
    if (error) {
        console.log(error);
        process.exit(0);
    }
    else {
        console.log('Server listening at ' + address);
    }
});
//# sourceMappingURL=server.js.map