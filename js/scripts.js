$(document).ready(function() {

  $("form#ageCheck").submit(function(event) {
     var age = parseInt($("#ageInput").val());
    event.preventDefault();
    $("#over18").hide();
    $("#under18").hide();
    if (age > 18) {
      $("#over18").show();
    }
    else {
      $("#under18").show();
    }
  });
});
