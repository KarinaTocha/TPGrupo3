document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.form-registro form').addEventListener('submit', function(event) {
      event.preventDefault();


  // Obtener los valores de los campos
  var nombre = document.getElementsByName('name')[0].value;
  var telefono = document.getElementsByName('tel')[0].value;
  var fechaNacimiento = document.getElementsByName('birthdate')[0].value;
  var genero = document.getElementsByName('gender')[0].value;
  var recibirNewsletter = document.querySelector('input[name="option"]:checked');
  var mail = document.getElementsByName('mail')[0].value;
  var clave = document.getElementsByName('clave')[0].value;

  // Realizar la validación
  if (nombre.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    return false;
}

if (telefono.trim() === '') {
    alert('Por favor, ingresa tu número de teléfono.');
    return false;
}

if (fechaNacimiento.trim() === '') {
    alert('Por favor, ingresa tu fecha de nacimiento.');
    return false;
}

if (genero === '') {
    alert('Por favor, selecciona tu género.');
    return false;
}

if (!recibirNewsletter) {
    alert('Por favor, selecciona si deseas recibir el newsletter.');
    return false;
}

if (mail.trim() === '') {
  alert('Por favor, ingresa tu email.');
  return;
}

if (clave.trim() === '') {
  alert('Por favor, ingresa tu contraseña.');
  return;
}


// Si la validación es exitosa, puedes enviar el formulario
alert('Formulario enviado correctamente!');
});
});
