$(document).ready(function() {
  var $write = $('#write');
  var textarea = $('#textarea1')
  var content = $('#content')

  $write.on('click', function(e){ 
    $('#post-box').toggleClass('hide');
  })

  textarea.on('input', function(event) {
    if ($(this).val().length > 0) {
      $('.btn').attr('disabled', false);
    } else {
      $('.btn').attr('disabled', true);
    }
  });
  
  $('.btn').on('click', function(e){
    event.preventDefault(e)
    var info = textarea.val();
    content.prepend('<div class= "border">'+ info + "</div>");
    textarea.val("")
    $('.btn').attr('disabled', true);
  })
});