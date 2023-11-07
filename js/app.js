
const usuariosRegistrados = [
  { usuario: 'Juan', contraseña: 'contraseña1', saldo: 800 },
  { usuario: 'Pedro', contraseña: 'contraseña2', saldo: 500 },
  { usuario: 'Miguel', contraseña: 'contraseña3', saldo: 200}
]; //Declaración de arreglo de usuarios registrados

let usuarioActual = null; // Variable global para almacenar el usuario actualmente conectado

function iniciarSesion(usuario, contraseña) {
  for (const user of usuariosRegistrados) {
    if (user.usuario === usuario && user.contraseña === contraseña) {
      usuarioActual = user; // Actualiza el usuario actual cuando el usuario inicia sesión
      return { saldo: user.saldo, nombre: user.usuario }; // Retorna saldo y nombre del usuario si las credenciales son correctas
    }
  }
  return null; // Retorna null si las credenciales son incorrectas
} // Función para iniciar sesión con usuario y contraseña como parámetros de entrada y retorna saldo y 
//nombre del usuario si las credenciales son correctas, de lo contrario retorna null

function actualizarSaldoHTML() {
  document.getElementById('saldoUsuario').innerText = `Tu saldo es de $${usuarioActual.saldo} pesos`;
} // Función para actualizar el saldo en el HTML


function retirarDinero() {
  let cantidad = prompt('Ingrese la cantidad a retirar');
  cantidad = Number(cantidad); // Convierte la entrada del usuario a un número

  if (cantidad > usuarioActual.saldo) {
    alert('No tienes suficiente saldo para retirar esa cantidad.'); // Informa al usuario que no tiene suficiente saldo
    return;
  } else if (usuarioActual.saldo - cantidad < 10) {
    alert('No puedes dejar tu saldo por debajo de 10.'); // Informa al usuario que no puede dejar su saldo por debajo de 10
    return;
  }
  usuarioActual.saldo -= cantidad; // Actualiza el saldo del usuario
  actualizarSaldoHTML(); // Actualiza el saldo en el HTML
} // Función para retirar dinero con saldo y cantidad como parámetros de entrada y retorna el nuevo saldo luego de retirar la cantidad

function depositarDinero() {
  let cantidad = prompt('Ingrese la cantidad a depositar');
  cantidad = Number(cantidad); // Convierte la entrada del usuario a un número

  if (cantidad < 0) {
    alert('No puedes depositar una cantidad negativa.'); // Informa al usuario que no puede depositar una cantidad negativa
    return;
  }
  else if (usuarioActual.saldo + cantidad > 990) {
    alert('No puedes tener un saldo mayor a 990.'); // Informa al usuario que no puede tener un saldo mayor a 990
    return;
  }
  usuarioActual.saldo += cantidad; // Actualiza el saldo del usuario
  actualizarSaldoHTML(); // Actualiza el saldo en el HTML
}// Función para depositar dinero con saldo y cantidad como parámetros de entrada y retorna el nuevo saldo luego de depositar la cantidad


//Esto se ejecuta cuando se envía el formulario de inicio de sesión y se llama a la función iniciarSesionYMostrarInfo
function iniciarSesionYMostrarInfo(event) {
  event.preventDefault(); // Evita que la página se recargue cuando se envía el formulario

  const usuario = document.getElementById('UserInput').value;
  const contraseña = document.getElementById('PaswordInput').value;

  const resultadoInicioSesion = iniciarSesion(usuario, contraseña);

  if (resultadoInicioSesion !== null) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('infoCuenta').style.display = 'flex'; // Muestra el div 'infoCuenta'
    const { saldo, nombre } = resultadoInicioSesion;
    document.getElementById('nombreUsuario').innerText = `Bienvenido ${nombre}`;
    document.getElementById('saldoUsuario').innerText = `Tu saldo es de $${saldo} pesos`;
  } else {
    alert('Inicio de sesión fallido. Verifica tus credenciales.');
  }
}


