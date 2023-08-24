const firebaseConfig = {
        apiKey: "AIzaSyA07AKWP_hHIVBl4UNtO9NNexVfDrt51Ak",
        authDomain: "project-d70be.firebaseapp.com",
        databaseURL: "https://project-d70be-default-rtdb.firebaseio.com",
        projectId: "project-d70be",
        storageBucket: "project-d70be.appspot.com",
        messagingSenderId: "373414519479",
        appId: "1:373414519479:web:f18ea683171fccec462332"
};

firebase.initializeApp(firebaseConfig)

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML  = "Welcome "+user_name + " !"


function addKwitterRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpous:"Adding Room Name"    
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
      
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log(Room_names)
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem('room_name')
      localStorage.removeItem('user_name')
      window.location="index.html"
}


