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
room_name=localStorage.getItem('room_name')


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name']
    message=message_data["message"]
    like=message_data['like']
   
    message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
    

    

   
    document.getElementById("output").innerHTML += message_with_tag;

    
 } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").value = ""
}




function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location.replace("index.html")    
}
