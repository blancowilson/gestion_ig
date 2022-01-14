exports.indexig = (req, res) => {
    res.render('index', {
        nombrePagina: 'Inicio'
    });
}

exports.formularioNuevoRegistro = (req, res) => {
    res.render('Nuevo-registro', {
        nombrePagina: 'Nuevo Registro'
    });
}

exports.nuevoRegistro = (req, res) => {
   const {nombre} = req.body;
   let errores = [];
   if (!nombre) {
       errores.push({'texto': 'Agregar descripcion del registro'})
   }
   if (errores.length>0) {
    res.render('nuevo-registro', {
        nombrePagina: 'Nuevo Registro',
        errores
    })
   } 

}