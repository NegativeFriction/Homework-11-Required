$(document).ready(function() {
  console.log("Document ready");
  $("#submit").on("click", function(event) {
    event.preventDefault();
    // console.log($("#1").val());
    var userName = $("#userName").val();
    var userPhoto = $("#userPhoto").val();
    if (userName && userPhoto) {
      var userData = [userName, userPhoto];
    } else {
      alert("Please fill in your name and profile picture");
      return;
    }
    for (var i = 1; i < 11; i++) {
      var response = $("#" + i).val();
      if (response === null) {
        alert("Please fill in all of the checkboxes.");
        break;
      }
      console.log(response[0]);
      userData.push(response[0]);
    }
    findFriend(userData);
  });

  function findFriend(userData) {
    $.post("/api/new", userData)
      // on success, run this callback
      .then(function(response) {
        // log the data we found
        console.log(response);
        // tell the user we're adding a character with an alert window
        alert("Calculating your friends.");
        getFriend();
      });
  }

  function getFriend() {
    $.get("/api/friend", function(data) {
      console.log(data);
    });
  }
});
