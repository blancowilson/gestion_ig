const express = require ('express');
const router = express.Router();
const controllerig = require('../controllers/igcontroller');
const {body} = require('express-validator/check')

module.exports = function (){
    router.get('/',controllerig.indexig);
    router.get('/nuevo-registro',controllerig.formularioNuevoRegistro);
    router.post('/nuevo-registro',
        body('nombre').not().isEmpty().trim().escape(),
        controllerig.nuevoRegistro);
    return router;
}