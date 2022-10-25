/*====================[Modulos]==================================*/
import express from "express";

import session from "express-session";

import exphbs from 'express-handlebars'

import dotenv from 'dotenv';

import path from 'path'

dotenv.config()

const app = express();

/*====================[Middlewares]==================================*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/*--------------------Motor de plantillas---------------------------*/

app.set('view', 'src/view')
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('view'), 'layout')

}))


/*====================[Base de datos]==================================*/

const usuariosDB = [];
/*====================[Rutas]==================================*/
app.get('/login', (req, res) => {
    res.render('login.hbs')
});

app.get('/register', (req, res) => {
    res.render('registro.hbs');
})

/*====================[Servidor]==================================*/

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Sevidor eschando en el perto ${PORT}`);

});

server.on('error', error => {
    console.log(`Error en el servidor ${error}`);
});