// ===============================================================================
// DATA
// Below will hold all of the friends data.
// Initially we set it equal to a "dummy" user.
// ===============================================================================


//enter all 5's to test daisy, all 3's to test Damon, and all 1's to test Nova
var friendArray = [
    {
        "name":"Daisy",
        "photo":"https://i.ibb.co/nQrBwyL/daisy.jpg",
        "scores":[
            4,
            5,
            2,
            2,
            1,
            5,
            4,
            5,
            5,
            5
          ]
    },
    {
        "name":"Nova",
        "photo":"https://i.ibb.co/kGKpnP0/IMG-1710.jpg",
        "scores":[
            1,
            1,
            5,
            4,
            5,
            1,
            2,
            1,
            1,
            1
          ]
    },
    {
      "name":"Damon",
      "photo":"https://i.ibb.co/d7Z4pfM/damon.jpg",
      "scores":[
          2,
          1,
          5,
          2,
          3,
          2,
          5,
          5,
          2,
          4
        ]
  }
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;


