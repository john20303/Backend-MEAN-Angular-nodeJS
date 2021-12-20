const {Schema, model} = require("mongoose");


const UserLoginSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});
    module.exports = model('LoginUser', UserLoginSchema);//Aqui le puse un nombre diferente al loginUser para verficar la diferencia del nombre.
