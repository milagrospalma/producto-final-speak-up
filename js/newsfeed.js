$(document).ready(function() {
  var $textarea = $('#textarea1');
  // Evento para mostrar el textarea
  $('#create').on('click', function() {
    $('#input-post').toggleClass('hide');
  });

  $('#send').on('click', function() {
    var post = $textarea.val();
    $('#content').append(post);
    $textarea.empty();
  });
});