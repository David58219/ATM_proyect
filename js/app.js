const usuariosRegistrados = [
  { usuario: 'usuario1', contraseña: 'contraseña1', saldo: 1000 },
  { usuario: 'usuario2', contraseña: 'contraseña2', saldo: 500 },
  { usuario: 'usuario3', contraseña: 'contraseña3', saldo: 200}
];

function iniciarSesion(usuario, contraseña) {
  for (const user of usuariosRegistrados) {
    if (user.usuario === usuario && user.contraseña === contraseña) {
      return { saldo: user.saldo, nombre: user.nombre }; // Retorna saldo y nombre del usuario si las credenciales son correctas
    }
  }
  return null; // Retorna null si las credenciales son incorrectas
}

function iniciarSesionYRedireccionar() {
  const usuario = document.getElementById('UserInput').value; 
  const contraseña = document.getElementById('PaswordInput').value; 
  const resultadoInicioSesion = iniciarSesion(usuario, contraseña);

  if (resultadoInicioSesion !== null) {
    const { saldo, nombre } = resultadoInicioSesion;
    console.log(`Inicio de sesión exitoso para ${nombre}. Saldo actual: $${saldo}`);
    window.location.href = 'segura.html'; 
  } else {
    console.log('Inicio de sesión fallido. Verifica tus credenciales.');
  }
}