$(document).ready(function() {
  // Elementos
  var $email = $('#email');
  var $password = $('#password');
  var $login = $('#login');

  // Declarando e inicializando variables
  var user = null;
  var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  var MINLENGTH = 6;

  // Variables de validación
  var validatedEmail = false;
  var validatedPwd = false;

  // Activa el button
  function onButton() {
    if (validatedEmail && validatedPwd) {
      $login.attr('disabled', false);
    }
  }
  // Desactiva el button
  function offButton() {
    $login.attr('disabled', 'disabled');
  }

  // Evento para email
  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      validatedEmail = true;
      onButton();
    } else {
      validatedEmail = false;
      offButton();
    }
  });

  // Evento para password
  $password.on('input', function() {
    if ($(this).val() === localStorage.password) {
      validatedPwd = true;
      onButton();
    } else {
      validatedPwd = false;
      offButton();
    }
  });

  // Evento para el boton Log In
  $login.on('click', function(event) {
    event.preventDefault();
    if (validatedEmail && validatedPwd) {
      window.location.href = 'newsfeed.html';
    }
  });
});