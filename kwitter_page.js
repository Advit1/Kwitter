var firebaseConfig = {
      apiKey: "AIzaSyDtnDgEywiL2rL-67QZ2VW2Qoj76-eYYjI",
      authDomain: "deletetest-132c7.firebaseapp.com",
      databaseURL: "https://deletetest-132c7-default-rtdb.firebaseio.com",
      projectId: "deletetest-132c7",
      storageBucket: "deletetest-132c7.appspot.com",
      messagingSenderId: "251442731867",
      appId: "1:251442731867:web:eb8dd0bdc2ec1bb2dd187e"
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
