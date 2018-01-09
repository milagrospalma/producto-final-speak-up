$(document).ready(function() {
  $('select').material_select();
 
  $(document).ready(function() {
    $('.back').click(function() {
      parent.history.back();
      return false;
    });
  });
  
});
        