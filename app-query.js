const express  = require("express");  //importar
const cors = require('cors');
const app = express() //llamar la libreria

const port = 3001;  //puerto


app.use(cors({
    origin : "http://localhost:3000",
    optionsSuccessStatus:200
}))

var bodyParser = require('body-parser')
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: true
}));

app.get('/', function(req,res){   //ruta
    res.send('Programcion Web');  //enviar al usuario un mensaje
})


/*app.get('/alumnos/:codigo/:nombre',function(req,res){
    var codigo = req.params.codigo;
    var nombre = req.params.nombre;
    res.send(`<h1>Codigo: ${codigo}</h1> <h2>Nombre: ${nombre} </h2>`);
})*/

app.get('/alumnos-query', function(req, res) {
    var codigo = req.query.cod;
    var nombre = req.query.nom;
    res.send(`Tipo QUERY<br/><h1>Codigo: ${codigo}</h1>
    <h2>Nombre: ${nombre}</h2>`);
    });

app.post('/alumnos-form', function(req, res){
    var codigo = req.body.codigo;
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var comentario = req.body.comentario;
    //res.send(`Tipo FORM<br/><h1>Codigo: ${codigo}</h1>
    //<h2>Nombre Completo: ${nombre} __ ${apellidos}</h2>
    // <h3>Comentario: ${comentario}</h3>`);
    var obj={"codigo": "1245",
     "nombre":"sasasa"
        
    }
    res.send(obj);
    });
       

//cofigurar el servidor cómo vaa estar escuchando los mensajes
app.listen(port, function(){
    console.log(`Servidor está funcionando en el puerto ${port}`)  // `
})