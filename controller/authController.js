//Register Controller
const postRegister = async (req, res) => {
    const {name, email, password} = req.body;
    return res.json({
        ok: true,
        msg: "Creando usuario"
    })
}


//Login controller
const postLogin = async (req, res) => {
    const {email, password} = req.body;
    return res.json({
        ok: true,
        msg: "logeando un usuario ya registrado"
    })
}


//Renew token
const getRenewToken = async (req, res) => {
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
