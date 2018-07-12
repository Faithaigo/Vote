//ui logic
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


var name = $("#head-prefer");

const dbRefObject = firebase.database().ref().child("#head-prefer");

//dbRefObject.on('value', snap => console.log(snap.val()));
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
