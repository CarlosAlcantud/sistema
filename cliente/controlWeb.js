function ControlWeb(){

    this.mostrarAgregarUsuario=function(){
        let cadena = '<div id = "mAU" class="form-group">';
        cadena = cadena +'<label for="nick">Introduce el nick:</label> ';
        cadena = cadena + '<input type="text" class="form-control" id="nick">';
        cadena = cadena + '<button id= "btnAU" type="submit" class="btn btn-primary">Submit</button>';
        cadena = cadena + '</div> ';
        

        $("#au").append(cadena); //au = es la etiqueta html que viene de agregar usuario. 

        $("#btnAU").on("click",function(){ 
            

            let nick = $('#nick').val();
            if (nick){
                $('#mAU').remove(); //Para que detecte el id se le pone la almuadilla, 
                rest.agregarUsuario(nick)
            }
            
            
        })
    }
    this.mostrarMsg=function(msg){
        $('#mMsg').remove();
        let cadena='<h2 id="mMsg">'+msg+'</h2>';
        $('#msg').append(cadena);
    }

}