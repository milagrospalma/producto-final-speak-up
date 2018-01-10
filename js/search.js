$(document).ready(function() {
  $('select').material_select();
  $('.modal').modal();
  // Evento para las opciones
  $('li').on('click', function() {
    $('#user p').remove();
    var language = $(this).text();
    switch (true) {
    case language === 'Inglés':
      showFriends('ingles');
      break;
    case language === 'Francés':
      showFriends('frances');
      break;
    case language === 'Italiano':
      showFriends('italiano');
      break;
    }
  });

  // Esta función muestra los usuarios que cumplan con la condición
  function showFriends(language) {
    var arrLanguages = Object.keys(data);
    for (var i = 0; i < arrLanguages.length; i++) {
      if (arrLanguages[i] === language) {
        var arrUsers = data[language];
        for (var j = 0; j < arrUsers.length; j++) {
          var objUser = arrUsers[j];
          console.log(objUser);
          $('#user').append('<p>' + objUser.name + '</p>')
        }
      }
    }
  };

  // Evento para mostrar el modal con informacion de usuario
  $('#user').on('click', function() {
    $('#modal1').modal('open');
  });

  // Para retroceder a la vista anterior
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
});
        