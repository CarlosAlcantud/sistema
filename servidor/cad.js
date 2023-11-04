var mongo=require("mongodb").MongoClient;
var ObjectId=require("mongodb").ObjectId;


function CAD(){

    this.usuarios;

    this.buscarOCrearUsuario=function(email,callback){
        //buscarOCrear(this.usuarios,{email:email},callback);
        buscarOCrear(this.usuarios,{email:email},callback);
    }

function buscarOCrear(coleccion,criterio,callback)
    {
        coleccion.findOneAndUpdate(criterio, {$set: criterio}, {upsert: true,returnDocument:"after",projection:{email:1}}, function(err,doc) {
           if (err) { throw err; }
           else { 
                console.log("Elemento actualizado"); 
                console.log(doc.value.email);
                callback({email:doc.value.email});
            }
         });  
    }

    
    this.conectar=async function(callback){
        let cad=this;
        let client= new mongo("mongodb+srv://carlosalcantud:<Q9Frfvx6zA0cFf0H>@cluster0.hvpn5fr.mongodb.net/?retryWrites=true&w=majority");
        await client.connect();
        const database=client.db("sistema");
        cad.usuarios=database.collection("usuarios");
        callback(database);
    }



}

module.exports.CAD = CAD;