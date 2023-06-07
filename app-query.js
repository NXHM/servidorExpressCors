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
var bodyParser = require('body-parser')
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: true
}));
app.listen(port, function(){
    console.log(`Servidor funcionando en el puerto ${port}`)
}
)
app.get('/alumnos-query',function(req,res){
    var codigo=req.query.cod;
    var nombre=req.query.nom;
    res.send(`<h1>Tipo QueryCodigo:${codigo}</h1><h2>Nombre: ${nombre}</h2>`);
}
)
app.post('/alumnos-form',function(req,res){
    var codigo=req.body.codigo;
    var nombre=req.body.nombre;
    res.send(`<h1>Tipo Form Codigo:${codigo}</h1><h2>Nombre: ${nombre}</h2>`);
}
)
