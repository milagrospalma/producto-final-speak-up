$(document).ready(function() {
  var $write = $('#write');
  var textarea = $('#textarea1');
  var content = $('#content');
  var time = moment().format('LT');
  console.log(time);

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

  var image;
  $('.btn').on('click', function(e) {
    event.preventDefault(e);
    var info = textarea.val();
    content.prepend('<div id="post" class= "border">' + info + '<div class = "center-align"> <img src="" id="picture" alt="" class="hide" width= 220px;></div><div class= "right-align">' + time + '</div> </div>');
    textarea.val('');
    $('#picture').prepend('#post');        
    $('.btn').attr('disabled', true);
    $('#picture').attr('src', image);
    $('#picture').removeClass('hide');        
  });
  
  $('.select-img').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        image = e.target.result;
        $('.btn').attr('disabled', false);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
});