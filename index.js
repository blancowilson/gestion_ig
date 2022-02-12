const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


const productos = [
    {
        'producto' : 'libro',
        'precio': 10
    },
    {
        'producto': 'computadora',
        'precio': 1500
    }
]
//BD

const db = require('./config/db');
require('./models/Registros');
db.sync()
    .then(() => console.log('Conectando al servidor'))
    .catch(error => console.log(error));

//crear una app de express
const app = express();

app.use(express.static('public'));

app.set('view engine','pug');
app.set('views', path.join(__dirname,'./views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use( '/',routes());
app.listen(3000);