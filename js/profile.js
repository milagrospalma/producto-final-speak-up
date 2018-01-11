$(document).ready(function() {
  // contenedor de informacion de perfil
  var $containerInformation = $('.all-information');
  $containerInformation.hide();

  // materialize
  $('select').material_select();
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
  // variables verificadoras booleanas
  var verifySelect = false;
  var verifyBirthday = false;
  var verifyCountry = false;
  var verifyLenguage1 = false;
  var verifyLenguage2 = false;
  var verifyBiography = false;
  var verifyInterest = false;
  
  // contenedor de formulario de datos
  var $dataform = $('.data-form');
  var $select = $('select');
  var $birthday = $('#birthday');
  var $country = $('#country');
  var $lenguage1 = $('#lenguage1');
  var $lenguage2 = $('#lenguage2');
  var $biography = $('#biography');
  var $interest = $('#interest');
  var $btnsave = $('#btnsave');

  $select.on('change', function() {
    // sexo seleccionado por el usuario
    var sex = '';
    if ($select.val() === 1) {
      sex = 'Femenino';
    } else if ($select.val()) {
      sex = 'Masculino';
    } else {
      sex = 'Otro';
    }
    $verifySelect = true;
  });

  // $select.on('input', function() {
  //   // cumpleñaos ingresado por el usuario
  //   var sex = $(this).val();
  //   if (sex) {
  //     verifySelect = true;
  //     activeButton();
  //   } else {
  //     disabledButton();
  //   }
  // });

  $birthday.on('keypress', function() {
    // cumpleñaos ingresado por el usuario
    var valBirthday = $(this).val();
    if (valBirthday.length >= 8) {
      verifyBirthday = true;
      console.log(valBirthday.length);
      activeButton();
    } else {
      disabledButton();
    }
  });

  $country.on('keypress', function() {
    // pais ingresado por el usuario
    var valCountry = $(this).val();
    if (valCountry.length >= 4) {
      verifyCountry = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $lenguage1.on('keypress', function() {
    // lengua nativa ingresado por el usuario
    var valLenguage1 = $(this).val();
    if (valLenguage1.length >= 4) {
      verifyLenguage1 = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $lenguage2.on('keypress', function() {
    //  lengua que quiere aprender el usuario
    var valLenguage2 = ($(this).val());
    if (valLenguage2.length >= 4) {
      verifyLenguage2 = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $biography.on('keypress', function() {
    // biografia ingresada por el usuario
    var valBiography = $(this).val();
    if (valBiography.length >= 5) {
      verifyBiography = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  $interest.on('keypress', function() {
    // intereses ingresados por el usuario
    var valInterest = $(this).val();
    if (valInterest.length >= 10) {
      verifyInterest = true;
      activeButton();
    } else {
      disabledButton();
    }  
  });

  // Activando boton 
  function activeButton() {
    if (verifySelect.value === true && verifyBirthday.value === true && verifyBiography.value === true && verifyCountry.value === true && verifyLenguage1.value === true && verifyLenguage2.value === true && verifyInterest.value === true) {
      $btnsave.removeAttr('disabled');
    }
  }
  // Desactivando boton 
  function disabledButton() {
    $btnsave.attr('disabled', false);
  }

  // rellenando perfil
  // var $divSex = $('#divsex');
  // $divsex.prepend('<p>' + sex + '</p>');

  // var $divBirthday = $('#divbirthday');
  // $divBirthday.prepend('<p>' + valBirthday + '</p>');

  // var $divSex = $('#divsex');
  // $divsex.prepend('<p>' + sex + '</p>');

  // var $divBirthday = $('#divbirthday');
  // $divBirthday.prepend('<p>' + valBirthday + '</p>');
});
          