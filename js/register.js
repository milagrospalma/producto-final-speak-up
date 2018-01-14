$(document).ready(function() {
  // Elementos
  var $email = $('#email');
  var $password = $('#password');
  var $login = $('#login');
  var $google = $('#google-login');
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
      $login.attr('disabled', false);
    }
  }
  // Desactiva el button
  function offButton() {
    $login.attr('disabled', 'disabled');
  }

  // Evento para email
  $email.on('input', function() {
    if (REGEXEMAIL.test($(this).val())) {
      validatedEmail = true;
      onButton();
    } else {
      validatedEmail = false;
      offButton();
    }
  });

  // Evento para password
  $password.on('input', function() {
    if ($password.val().length >= MINLENGTH) {
      validatedPwd = true;
      onButton();
    } else {
      validatedPwd = false;
      offButton();
    }
  });

  // Evento para el boton Log In
  $login.on('click', function() {
    localStorage.email = $email.val();
    // if (localStorage.email === user.email) {
    //   console.log('esta bien');
    // } else {
    //   console.log('esta mal');
    // }
    firebase.database().ref('speak-up').on('child_added', function(event) {
      var eventValue = event.val();
      console.log(eventValue);
    });
  });

  // Evento para el botón Acceso con Google
  $google.on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      save(result.user);
      window.location.href = 'newsfeed.html';
    });
  });

  // Función para guardar automáticamente
  function save(user) {
    var usuario = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    };
    firebase.database().ref('speak-up/' + user.uid).set(usuario);
  };

  // Evento para botón Sign Up
  $signup.on('click', function() {

  });
});