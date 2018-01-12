$(document).ready(function() {
  // Agrega posts de newsfeed a profile
  $('.info').append(localStorage.post);

  // Para retroceder a la vista anterior
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
});