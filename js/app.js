const usuariosRegistrados = [
  { usuario: 'Juan', contraseña: 'contraseña1', saldo: 1000 },
  { usuario: 'Pedro', contraseña: 'contraseña2', saldo: 500 },
  { usuario: 'Miguel', contraseña: 'contraseña3', saldo: 200}
]; //Declaración de arreglo de usuarios registrados


function iniciarSesion(usuario, contraseña) {
  for (const user of usuariosRegistrados) {
    if (user.usuario === usuario && user.contraseña === contraseña) {
      return { saldo: user.saldo, nombre: user.usuario }; // Retorna saldo y nombre del usuario si las credenciales son correctas
    }
  }
  return null; // Retorna null si las credenciales son incorrectas
} // Función para iniciar sesión con usuario y contraseña como parámetros de entrada y retorna saldo y 
//nombre del usuario si las credenciales son correctas, de lo contrario retorna null


function iniciarSesionYMostrarInfo() {
  const usuario = document.getElementById('UserInput').value; 
  const contraseña = document.getElementById('PaswordInput').value; 
  const resultadoInicioSesion = iniciarSesion(usuario, contraseña);
  const resultadoElemento = document.getElementById('resultado');
  const saldoInfoElemento = document.getElementById('saldo-info');

  if (resultadoInicioSesion !== null) {
    const { saldo, nombre } = resultadoInicioSesion;
    resultadoElemento.innerText = `Bienvenido ${nombre}`;
    saldoInfoElemento.innerText = `Tu saldo es de ${saldo} pesos`;  
    
  } else {
    alert('Inicio de sesión fallido. Verifica tus credenciales.');
  }
}


