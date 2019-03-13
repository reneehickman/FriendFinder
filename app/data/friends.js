// ===============================================================================
// DATA
// Below will hold all of the friends data.
// Initially we set it equal to a "dummy" user.
// ===============================================================================

var friendArray = [
    {
        "name":"Daisy",
        "photo":"https://i.ibb.co/nQrBwyL/daisy.jpg",
        "scores":[
            5,
            3,
            2,
            3,
            1,
            4,
            4,
            5,
            4,
            4
          ]
    },
    {
        "name":"Louie",
        "photo":"placeholder for link to pic of louie",
        "scores":[
            1,
            4,
            1,
            1,
            4,
            1,
            3,
            2,
            1,
            5
          ]
    }
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;


  