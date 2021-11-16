// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBczkjSYN4-Mue9qWaroiUMqaHRDs2M5Ic",
      authDomain: "website-c55c5.firebaseapp.com",
      databaseURL: "https://website-c55c5-default-rtdb.firebaseio.com",
      projectId: "website-c55c5",
      storageBucket: "website-c55c5.appspot.com",
      messagingSenderId: "689912497099",
      appId: "1:689912497099:web:94b2e668ce54149c06ec4e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
