import './App.css';

const port=3000;
function App() {
  function verificarEstado(response) {  //recibe la respuesta
    if (!response.ok) {
      throw Error("Ocurrio un error: " + response.statusText); //mostrar en texto el error que ocurrio
    }
    return response;
  }
  function procesarDato(data) {
    var res = document.getElementById("resultado");
    //innerHTML retorna con etiquetas <div> //innerText retorna en texto
    res.innerHTML = data;
  }

  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  function handleClick() {
    var codigo = document.getElementById("txtCodigo").value;
    var nombre = document.getElementById("txtNombre").value;

    //const URL = "http://localhost:3001/alumnos/" + codigo + "/" + nombre;
    const URL = "http://localhost:3001/alumnos-query?cod=" + codigo + "&nom=" + nombre;
    fetch(URL)
      .then(verificarEstado) //verificar estatus
      .then(response => response.text()) // extraer la data , retornar un texto
      .then(procesarDato) //prorcesar dato
      .catch(handleError);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    let myForm = document.getElementById("miFormulario");
    let myFormData = new FormData(myForm);
    let objJson=JSON.stringify(Object.fromEntries(myFormData));
    //myFormData.append("password", "123456");
    fetch("http://localhost:3001/alumnos-form",{
      method: 'POST',
      body: objJson,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(verificarEstado) //verificar estatus
      .then(response => response.text()) // extraer la data , retornar un texto
      .then(procesarDato) //prorcesar dato
      .catch(handleError);
  }
/*<form id="miFormulario" method="post" action="http://localhost:3001/alumnos-form">
        Codigo: <input type="text" name="codigo"></input><br />
        Nombre: <input type="text" name="nombre"></input><br />
        Apellidos: <input type="text" name="apellidos"></input><br />
        Comentario: <textarea type="text" name="comentario"></textarea><br />
        <button type="submit" onClick={handleSubmit}>Enviar datos</button>
      </form>*/
  return (
    <div>
      <form id="miFormulario" method="post" action="http://localhost:3001/alumnos-form">
        Codigo: <input type="text" name="codigo"></input><br />
        Nombre: <input type="text" name="nombre"></input><br />
        
        <button type="submit" onClick={handleSubmit}>Enviar datos</button>
      </form>

      <br></br>

      <span>Codigo: </span><input id="txtCodigo" type="text"></input><br />
      <span>Nombre: </span><input id="txtNombre" type="text"></input><br />
      <button onClick={handleClick}>Enviar</button>
      <div id="resultado"></div>
    </div>
  );
}

export default App;