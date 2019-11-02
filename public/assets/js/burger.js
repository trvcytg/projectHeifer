// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#burger")
        .val()
        .trim()
    };
  });
});
$(document).on("click", ".eatBurger", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  console.log("clicked");

  var id = $(this).data("id");
  console.log(id);
  // Send the POST request.
  $.ajax("/api/" + id, {
    type: "PUT",
    data: id
  }).then(function() {
    console.log("burger is gonzo");
    // Reload the page to get the updated list
    location.reload();
  });
});
