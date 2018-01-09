$(document).ready(function() {
  $('select').material_select();
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
});
        