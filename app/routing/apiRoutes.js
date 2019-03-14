// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information for each user and the answers to their survey questions
// ===============================================================================
var path = require('path');
var friendData = require("../data/friends");

module.exports = function(app) {
    
    // API GET Requests
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    // API POST Requests
    // Below code handles when a user submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        
        //stores new friends scores into a variable
        var newFriendData = req.body.Scores;
        var scoresArr = [];
        var bestMatch = 0;

        //iterates through current friends in frienddata array
        for (var i = 0; i < friendData.length; i++){
          var scoreDiff = 0;

          //iterate through to compare friends
          for (var j = 0; j < newFriendData.length; j++){
            scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newFriendScore[j])))
          }

          scoresArr.push(scoreDiff)
        }

        for (var i = 0; i < scoresArr.length; i++){
          if (scoresArr[i] <= scoresArr[bestMatch]){
            bestMatch = i;
          }
        }

        var match = friendData[bestMatch];
        res.json(match)

        friendData.push(req.body);

    });
  

  };
  