const express = require("express");
const cors= require('cors');
const app = express();

const port = 3001;
app.get('/',function(req,res){
    res.send('Programacion Web')
}
)
app.use(cors({
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}))
app.listen(port, function(){
    console.log(`Servidor funcionando en el puerto ${port}`)
}
)
app.get('/alumnos/:codigo/:nombre',function(req,res){
    var codigo=req.params.codigo;
    var nombre=req.params.nombre;
    res.send(`<h1>Codigo:${codigo}</h1><h2>Nombre: ${nombre}</h2>`);
}
)
