$(document).ready(function () {
  // Elementos
  var $email = $('#email');
  var $password = $('#password');
  var $signup = $('#signup');

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
      $signup.attr('disabled', false);
    }
  }
  // Desactiva el button
  function offButton() {
    $signup.attr('disabled', 'disabled');
  }

  // Evento para email
  $email.on('input', function () {
    if (REGEXEMAIL.test($(this).val())) {
      validatedEmail = true;
      onButton();
    } else {
      validatedEmail = false;
      offButton();
    }
  });

  // Evento para password
  $password.on('input', function () {
    if ($password.val().length >= MINLENGTH) {
      validatedPwd = true;
      onButton();
    } else {
      validatedPwd = false;
      offButton();
    }
  });

  // Evento para el boton Log In
  $signup.on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'signup-form.html';
  });
});