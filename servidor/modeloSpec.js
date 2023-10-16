const modelo = require("/modelo.js");


describe('El sistema', function() {
   let sistema;
  
  beforeEach(function() {
    sistema=new modelo.Sistema();
  });

  it('inicialmente no hay usuarios', function() {
  expect(sistema.numeroUsuarios()).toEqual(0);
  });

  it('Se agrega usuario ', function(){
  sistema.agregarUsuario("Pepe");
  expect(sistema.numeroUsuarios()).toEqual(1);
  expect(sistema.usuarioActivo("Pepe")).toBe(true);
    //expect(sistema.usuarios["Pepe"].nick).toEqual("Pepe");
  });

  it('Se eliminan los usuarios', function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.numeroUsuarios()).toEqual(1);
    sistema.eliminarUsuarios("Pepe");
    expect(sistema.numeroUsuarios()).toEqual(0);

  });

  it('Usuario activo', function(){
    sistema.agregarUsuario("Pepe");
    expect(sistema.usuarioActivo("Pepe")).toBe(true);

  });

  it('Numero de usuarios', function(){
    let num =sistema.numeroUsuarios();
    expect(num).toBe(0);
    sistema.agregarUsuario("Carlos");
    sistema.agregarUsuario("Carlos1");
    num= sistema.numeroUsuarios();
    expect(num).toBe(2);



  });

  it('Obtener usuarios',function(){
    let lista = sistema.obtenerUsuarios();
    expect(Object.keys(lista).length).toEqual(0);
    sistema.agregarUsuario("Pepe");
    sistema.agregarUsuario("Pepe1");
    lista=sistema.obtenerUsuarios();
    expect(Object.keys(lista).length).toEqual(2);

  });
  
 })