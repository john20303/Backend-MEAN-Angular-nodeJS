const { Router } = require('express');
const { postLogin, postRegister, getRenewToken } = require("../controller/authController");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const validarJWT = require('../helpers/validar-token');
const router = Router();


//Registrando o creando un nuevo usuario!
router.post('/register', [
    check('name', 'El campo name no puede estar vacio.').not().isEmpty(),
    check('email', 'El campo email es obligatorio.').isEmail(),
    check("password", "Por favor ingrese un password al menos de  8 caracteres una mayúscula una minúscula un carácter especial y un dígito.")
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/, ),
    validarCampos
], postRegister);


//logeando un usuario ya registrado
router.post('/', [
    check('email', 'El campo email es obligatorio.').isEmail(),
    check("password", "Por favor ingrese un password al menos de  8 caracteres una mayúscula una minúscula un carácter especial y un dígito. ", )
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/, ),
    validarCampos
], postLogin);


//Validar y revalidar token
router.get('/renew', [
    validarJWT
], getRenewToken);


module.exports = router