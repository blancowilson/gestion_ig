const express = require('express');
const routes = require('./routes');

//crear una app de express

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


const app = express();


app.use( '/',routes());
app.listen(3000);