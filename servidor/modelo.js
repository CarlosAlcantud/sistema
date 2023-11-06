const datos = require("./cad.js");

function Sistema(){
    this.usuarios={};
    this.cad = new datos.CAD();
    this.cad.conectar(function(db){

        console.log("Conectado a Mongo Atlas");
    });

    this.agregarUsuario=function(nick){
        let res={"nick": -1};
        if (!this.usuarios[nick]){
        this.usuarios[nick]=new Usuario(nick);
        res.nick=nick;
        console.log("Nuevo usuario en el sistema:"+nick);
        }
        else{
        console.log("el nick "+nick+" está en uso");
        }
        return res;
    }

    this.usuarioOAuth=function(usr,callback){
        this.cad.buscarOCrearUsuario(usr,function(res){
        console.log("El usuario "+res.email+" está registrado en el sistema");
        callback(res);
        });
    }

    this.obtenerUsuarios=function(){
        return this.usuarios;
        }

    this.usuarioGoogle = function(usr,callback){
        this.cad.buscarOCrearUsuario(usr,function(obj){
            callback(obj)
         });
    }        

    this.usuarioActivo=function(nick){
        const resultado = {"Activo": this.usuarios.hasOwnProperty(nick)}
        return resultado;
        //return nick in this.usuarios;
//         let res={activo:false};
//         res.activo=(nick in this.usuarios);
//         return res;
        
    }
    
    this.numeroUsuarios=function(){
        //let numero_usuarios = Object.keys(this.usuarios).length;
        let res = {"num":Object.keys(this.usuarios).length};
        return res;
      }
    if (!this.test){
      this.cad.conectar(function(){         //no se define una funcion si no que se llama
        console.log("Conectado a Mongo Atlas");
      });
    }

    

    this.eliminarUsuario=function(nick){
        let res = {"res:":-1};
        if (nick in this.usuarios){
            delete this.usuarios[nick];
            console.log("Usuario "+nick+" borrado");
            res = {"res":nick};
        }
        else{
            console.log("No existe el usuario "+nick);
        }
        return res;
    }




    
   }

  
   

   function Usuario(nick){
    this.nick=nick;
   
   }

   function Usuario(nick,password){
    this.nick = nick;
    this.password = password;
   }

   module.exports.Sistema=Sistema
 