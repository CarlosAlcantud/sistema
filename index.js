const fs=require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/"));

let sistema = new modelo.Sistema();

app.get("/", function(request,response){
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
    response.setHeader("Content-type","text/html");
    response.send(contenido);
});

//Esto agrega un usuario

app.get("/agregarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.agregarUsuario(nick);
    response.send(res);
});

//Obtener usuarios
app.get("/obtenerUsuarios",function(request,response){
    let res=sistema.obtenerUsuarios();
    response.send(res);
});

//UsuarioActivo
app.get("/usuarioActivo/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.usuarioActivo(nick);
    response.send(res);
});    

app.get("/numeroUsuarios",function(request,response){
    let res = sistema.numeroUsuarios();

    response.json(res);
}); 


app.get("/eliminarUsuario/:nick",function(request,response){
    let nick=request.params.nick;
    let res=sistema.eliminarUsuarios(nick);
    response.send(res);
}); 



app.listen(PORT, () => {
console.log(`App está escuchando en el puerto ${PORT}`);
console.log('Ctrl+C para salir');
});