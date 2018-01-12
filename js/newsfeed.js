$(document).ready(function() {
  var $write = $('#write');
  var textarea = $('.text-post');
  var content = $('.content');
  var time = moment().format('LT');
  var select =  $('.select-img');
  var image;

  $('.info').append(localStorage.post)

  $write.on('click', function(e) { 
    $('#post-box').toggleClass('hide');
    $('#upload').toggleClass('hide');
  });

  textarea.on('input', function(event) {
    if ($(this).val().length > 0) {
      $('.btn').attr('disabled', false);
    } else {
      $('.btn').attr('disabled', true);
    }
  });


  $('.btn-submit').on('click', function(e) {
    event.preventDefault(e);
    var info = textarea.val();
    content.prepend('<div id="post" class="border z-depth-2">' + info + '<div class = "center-align"> <img src="" id="picture" alt="" class="hide" width= 220px;></div><div class= "right-align">' + time + '</div> </div>');
    textarea.val('');
    $('.img-info').val('')
    $('#picture').prepend('#post');        
    $('#picture').attr('src', image);
    $('#picture').removeClass('hide');
    image = '';
    localStorage.post = content.html();

  });
  
  $('.select-img').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        image = e.target.result;   
        $('.btn-submit').attr('disabled', false);     
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
  // $('.btn-submit').on('click', function(e) {
  //   $('.select-img').val('');
  //   event.preventDefault(e);
  //   var info = textarea.val();
  //   content.prepend('<div id="post" class= "border z-depth-2">' + info + '<div class = "center-align"> <img src="" id="picture" alt="" class="hide" width= 220px;></div><div class= "right-align"> <hr class= "gray">' + time + '</div> </div>');
  //   textarea.val('');
  //   $('.img-info').val('');
  //   $('#picture').prepend('#post');        
  //   $('.btn-submit').attr('disabled', true);
  //   $('#picture').attr('src', image);
  // });
  
  // $('.select-img').change(function() {
  //   if (this.files && this.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = function(e) {
  //       image = e.target.result;
  //       $('.btn-submit').attr('disabled', false);
  //       $('#picture').removeClass('hide');        
  //     };
  //     reader.readAsDataURL(this.files[0]);

  //   }
  // });
});