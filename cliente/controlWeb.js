function ControlWeb(){
    this.mostrarAgregarUsuario=function(){
        //cada vez que se llame a este metodo, si esta dibujado que lo borre(para no tener varios)(si no esta dibujado no borra)
        $('#bnv').remove();
        $("#mAU").remove();
        //guardamos el html en una variable
        //usamos comillas simples para la cadena porque los atributos de las etiquetas usan comillas dobles
        let cadena = '<div id="mAU" class="form-group">';
        cadena= cadena+'<label for="nick">Introduce el nick:</label>';
        cadena=cadena+'<input type="text" class="form-control" id="nick">';
        cadena=cadena+'<button id="btnAU" type="submit" class="btn btn-primary">Submit</button>';
        cadena=cadena+'<div><a href="/auth/google"><img src="./cliente/img/btn_google_signin_dark_focus_web.png" style="height:40px;"></a></div>';
        cadena=cadena+'</div>';

        $("#au").append(cadena);    //au = agregar usuario

        $("#btnAU").on("click",function(){  
            //recoger el valor del input text
            //llamar al servidor usando rest
            
            let nick=$("#nick").val();
            if(nick){
                rest.agregarUsuario(nick);
            }
            $("#mAU").remove();
        });
    }
    this.limpiar = function(){
        $("#mAU").remove();
    }
    this.mostrarMsg=function(msg){
        $('#mMsg').remove();
        let cadena = '<h3 id="mMsg">'+msg+'</h3>';
        $('#msg').append(cadena);
    }

    this.comprobarSesion=function(){
        
        let nick = $.cookie(clave);
        if (nick){
            cw.mostrarMsg("Bienvenido al sistema, "+nick);
        }
        else{
            cw.mostrarAgregarUsuario();
            //cw.mostrarRegistro();
            //cw.init();
        }
        }

    this.salir=function(){
            
        
        $.removeCookie(clave);
            

        location.reload();
        cw.mostrarMsg("Cerrando sesión de "+nick);
           
            
    }
    this.init=function(){
        let cw=this;
        google.accounts.id.initialize({
        client_id:"211171970949-tku16b0acn451u5tje2713q7biui167u.apps.googleusercontent.com",
        auto_select:false,
        callback:cw.handleCredentialsResponse
        });
        google.accounts.id.prompt();
    }

    this.handleCredentialsResponse=function(response){
        let jwt=response.credential;
            

        rest.enviarJwt(jwt);
    }

    this.mostrarRegistro=function(){
        $("fmRegistro").remove();
        $("#registro").load("./cliente/registro.html", function(){
            $("#btnRegistro").on("click",function(){  
          
            let email=$("#email").val();
            let pwd=$("pwd").val();

            if(email && pwd){
                rest.registrarUsuario(email);
                console.log(email+" "+pwd);
            }
        });

        });
    }

 

}