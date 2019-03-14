

//BELOW CODE IS CRITICAL. IT HANDLES HOW DATA IS SENT TO SERVER
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // store values into variables
    var friendName = $("#formName").val().trim();
    var friendPic = $("#formImg").val().trim();

    var questionCount = 10;

    //check to make sure user enters name and pic
    if (friendName == null || friendPic == null) {
        alert("Please fill out all questions!");
        return false;
    }

    //check to make sure all questions are answered
    for (var i = 1; i <= questionCount; i++) {
        userAnswer = $("input:radio[name=question" + i + "]:checked").val();
        if (userAnswer == null) {
            alert("Please fill out all fields!");
            return false;
        }
    };

    //create array to push friend scores into
    var scoresArray = [];

    // Looping through the answers and pushing them to the scores array. 
    for (var i = 1; i <= questionCount; i++) {
        scoresArray.push($("input:radio[name=question" + i + "]:checked").val());
    };

    console.log("Scores Array: " + scoresArray);

    //create an object that stores users inputs
    var newFriend = {
        name: friendName,
        photo: friendPic,
        scores: scoresArray
    };

    console.log("New Friend Data: " + JSON.stringify(newFriend));

    // Push the array of scores to the new friend object
    newFriend.scores = scoresArray;

    var currentURL = window.location.origin;

    // Making an AJAX post request. The server calculates the match and sends back the info in the data object.
    $.post(currentURL + '/api/friends', newFriend, function (data) {
        console.log("All Data: " + JSON.stringify(data));
        // Opens the results modal.
        $('#modalResults').modal();

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#matchName").text(data.name);

        $('#matchImg').attr("src", data.photo);

        // Show the modal with the best match 
        $("#resultsModal").modal('toggle');

    });

});

