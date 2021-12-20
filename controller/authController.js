const LoginUser = require('../models/user-db');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/jwt');

//Register Controller
const postRegister = async(req, res) => {
    const { name, email, password } = req.body;


    try {
        //Verificar email
        const usuario = await LoginUser.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe con ese email!",
            });
        }


        //Crear usuario con el modelo
        const dbUser = new LoginUser(req.body);


        //Hashear contraseña
        const salt = await bcrypt.genSaltSync(10);
        dbUser.password = await bcrypt.hashSync(password, salt);



        //Generer JWT
        const token = await generarJWT(dbUser.id, dbUser.name);



        //Crear usuario en la base de datos
        await dbUser.save();
        //Generar la respuesta exitosa
        res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            password,
            token
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: "Algo salio mal al registrar el usuario"
        })
    }
}


//Login controller
const postLogin = async(req, res) => {
    const { email, password } = req.body;
    return res.json({
        ok: true,
        msg: "logeando un usuario ya registrado"
    })
}


//Renew token
const getRenewToken = async(req, res) => {
    return res.json({
        ok: true,
        msg: "Validando token"
    })
}

module.exports = {
    postLogin,
    postRegister,
    getRenewToken
}