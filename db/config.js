const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('La base de datos esta conectado de forma correcta!');
    } catch (error) {
        console.log(error);
        throw new Error('Tenemos un error al conectar la base de datos!')
    }
}


module.exports = {
    dbConection
}
