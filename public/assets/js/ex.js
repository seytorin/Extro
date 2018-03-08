/* global moment */

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    user_name: $("#user_name").val().trim(),
    user_age: $("#user_age").val().trim(),
    gender: $("#gender").val().trim(),
    looking_for: $("#looking_for").val().trim(),
  };


  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {
console.log("working");
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.user_name + " Username: </p>");
      row.append("<p>" + newChirp.user_age + " User Age: </p>");
      row.append("<p>" + newChirp.gender + " Gender: </p>");
      row.append("<p>" + newChirp.looking_for + " Looking For: </p>");
      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");

  console.log(newChirp);

});
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].user_name + " </p>");
      row.append("<p>" + data[i].user_age + "</p>");
      row.append("<p>" + data[i].gender + "</p>");
      row.append("<p>" + data[i].looking_for + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});
