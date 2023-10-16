function Sistema(){
    this.usuarios={};

    this.agregarUsuario=function(nick){
        let res={"nick": -1};
        if (!this.usuarios[nick]){
        this.usuarios[nick]=new Usuario(nick);
        res.nick=nick;
        }
        else{
        console.log("el nick "+nick+" está en uso");
        }
        return res;
    }

    this.obtenerUsuarios=function(){
        return this.usuarios;
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
        let lista = Object.keys(this.usuarios);
        let res = {num:lista.length};
        return res;

    }

    

    this.eliminarUsuarios=function(nick){

        if(this.usuarioActivo(nick)){
            delete this.usuarios[nick];
        }
    }
   }

  
   

   function Usuario(nick){
    this.nick=nick;


   
   }

   module.exports.Sistema=Sistema
 