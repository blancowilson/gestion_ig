const express = require ('express');
const router = express.Router();
const controllerig = require('../controllers/igcontroller');

module.exports = function (){
    router.get('/',controllerig.indexig);
    router.get('/nuevo-registro',controllerig.formularioNuevoRegistro);
    router.post('/nuevo-registro',controllerig.nuevoRegistro);
    return router;
}