
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAs1iWJCdDrwaZWUi39RVa2yvp7Hlasy3c",
      authDomain: "class-test-97f0b.firebaseapp.com",
      databaseURL: "https://class-test-97f0b-default-rtdb.firebaseio.com",
      projectId: "class-test-97f0b",
      storageBucket: "class-test-97f0b.appspot.com",
      messagingSenderId: "224374168947",
      appId: "1:224374168947:web:de79e339d107033fba7906"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
     
getData();