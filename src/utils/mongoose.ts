const mongoose = require('mongoose');

const url = "mongodb+srv://den_flex:72983451linkoln@cluster0.2hcnv.mongodb.net/fastifyTS?retryWrites=true&w=majority"
const options = {useUnifiedTopology: true, useNewUrlParser: true}

mongoose.connect(url, options)
    .then(() => console.log('MongoDB connected'))
    .catch((err: any) => console.log(err));