const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const {dbConection} = require("./db/config");


//Conexion a la base de datos
dbConection();
//Cors
app.use(cors());
//Parseo del body
app.use(express.json());
//Rutas
app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log(`El server esta levantado en el puerto ${process.env.PORT}`);
})
