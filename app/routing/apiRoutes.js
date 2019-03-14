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
        // console.log(req.body)
        
        //parse new friend data
        var newFriend = {
          name: req.body.name,
          photo: req.body.photo,
          scores: []
        }
        

        var scoresArr = [];

        for (var i = 0; i < req.body.scores.length; i++){
          scoresArr.push(parseInt(req.body.scores[i]))
        }
    
        newFriend.scores = scoresArr;

        console.log("New Friend Data: " + JSON.stringify(newFriend));

        var diffArr = [];

        //iterate through each friend in friendData 
        for (var i = 0; i < friendData.length; i++){
          scoreDiff = 0;
          //compare new friend scores to each existing friends scores
          for (var j = 0; j < newFriend.scores.length; j++){
            scoreDiff = Math.abs(newFriend.scores[j] - friendData[i].scores[j])
            // console.log(scoreDiff);
          }
          
          //push each comparison into an array
          diffArr.push(scoreDiff);
        }

        //our best match will have the lowest calculated difference
        console.log("Difference Array with comparisons: " + diffArr)

        var bestMatchIndex = 0;

        for (var i = 0; i < diffArr.length; i++){
          if (diffArr[i] <= diffArr[bestMatchIndex]){
            bestMatchIndex = i;
          }
        }

        console.log("Best Match Index: " + bestMatchIndex);

        var bestMatch = friendData[bestMatchIndex];

        res.json(bestMatch);

        console.log("Best Match: " + JSON.stringify(bestMatch));
        
        //push new friend data into friendData object/Array
        friendData.push(newFriend);

    });
  

  };
  