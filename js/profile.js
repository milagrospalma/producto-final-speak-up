$(document).ready(function() {
  //contenedor de informacion de perfil
  var $containerInformation = $('.all-information');
  $containerInformation.hide();

  //materialize
  $('select').material_select();
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
  //variables verificadoras booleanas
  var verifySelect = false;
  var verifyBirthday = false;
  var verifyCountry = false;
  var verifyLenguage1= false;
  var verifyLenguage2= false;
  var verifyBiography = false;
  var verifyInterest= false;
  
  //contenedor de formulario de datos
  var $dataform = $('.data-form');
  var $select = $('select');
  var $birthday = $('#birthday');
  var $country = $('#country');
  var $lenguage1= $('#lenguage1');
  var $lenguage2= $('#lenguage2');
  var $biography = $('#biography');
  var $interest= $('#interest');
  var $btnsave =$('#btnsave');

  $select.on('click',function(){
    //sexo seleccionado por el usuario
    var sex = '';
    if($select.val() === 1){
      sex = 'Femenino';
    } else if($select.val()){
      sex = 'Masculino';
    } else {
      sex = 'Otro';
    }
  });

  $select.on('input',function(){
    //cumpleñaos ingresado por el usuario
    var sex = ($(this).val());
    if(sex) {
      verifySelect = true;
      activeButton();
    } else {
      disabledButton()
    }
  });

  $birthday.on('input',function(){
    //cumpleñaos ingresado por el usuario
    var valBirthday = ($(this).val());
    if(valBirthday) {
      verifyBirthday = true;
      activeButton();
    } else {
      disabledButton()
    }
  });

  $country.on('input',function(){
    //pais ingresado por el usuario
    var valCountry = ($(this).val());
    if(valCountry) {
      verifyCountry = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $lenguage1.on('input',function(){
    //lengua nativa ingresado por el usuario
    var valLenguage1 = ($(this).val());
    if(valLenguage1) {
      verifyLenguage1 = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $lenguage2.on('input',function(){
    //lengua que quiere aprender el usuario
    var valLenguage2 = ($(this).val());
    if(valLenguage2) {
      verifyLenguage2 = true;
      activeButton();
    } else {
      disabledButton();
    }
  });

  $biography.on('input',function(){
    //biografia ingresada por el usuario
    var valBiography = ($(this).val());
    if(valBiography) {
      verifyBiography = true;
      activeButton();
    } else {
      disabledButton();
    }
  });
  $interest.on('input',function(){
    //intereses ingresados por el usuario
    var valInterest = ($(this).val());
    if(valInterest) {
      verifyInterest = true;
      activeButton();
    } else {
      disabledButton();
    }
    
  });

  //Activando boton 
  function activeButton() {
    if (verifyBirthday && verifyBiography && verifyCountry && verifyLenguage1 && verifyLenguage2 && verifyInterest) {
      $btnsave.attr('disabled',false);
    }
  }
  //Desactivando boton 
  function disabledButton() {
      $btnsave.attr('disabled',true);
  }

  // direccionando al perfil
  $btnsave.on('click',function(){
    $dataform.hide();
    $containerInformation.show();
  });

  //rellenando perfil
  var $divSex = $('#divsex');
  $divsex.prepend( "<p>"+sex+"</p>" );

  var $divBirthday = $('#divbirthday');
  $divBirthday.prepend( "<p>"+valBirthday+"</p>");

  var $divSex = $('#divsex');
  $divsex.prepend( "<p>"+sex+"</p>" );

  var $divBirthday = $('#divbirthday');
  $divBirthday.prepend( "<p>"+valBirthday+"</p>" );

  

});
          