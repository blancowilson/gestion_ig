const express = require ('express');
const router = express.Router();
const controllerig = require('../controllers/igcontroller');

module.exports = function (){
    router.get('/',controllerig.indexig);
    router.get('/nosotros',controllerig.nosotros);
    return router;
}