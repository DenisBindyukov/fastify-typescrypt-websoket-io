import app from "./app";

const port = 3000;
//const address = '127.0.0.1';

require('./utils/mongoose');

const start = async () => {
    try {
        await app.listen(port);
        console.log(`Server listening at ${port} port`);
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
};

start();
