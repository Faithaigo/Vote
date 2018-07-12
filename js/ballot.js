
//business Logic

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCi4-EJM7J-uCX7-VEd7dw1h7VCX738pQ4",
  authDomain: "vote-5d11b.firebaseapp.com",
  databaseURL: "https://vote-5d11b.firebaseio.com",
  projectId: "vote-5d11b",
  storageBucket: "vote-5d11b.appspot.com",
  messagingSenderId: "917323240630"
};
firebase.initializeApp(config);


//UI Logic

$(document).ready(function() {
  var count = 0;

  var countVotes = $("#count").val();

  var click = $("#hp").click(function() {
    //alert("Hello.");
    count++;
    $("#counter").html("My current count is: "+count);
  });

  var voteCountRef = firebase.database().ref('node/votes');
  voteCountRef.on('value', function(snapshot) {
    //updateStarCount(countVotes, snapshot.val());
    return (currentClicks || 0) + 1;
  });
})
