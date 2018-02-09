var config = {
    apiKey: "AIzaSyBUFp8fGJsFzwO5Qf6yWP1ZYycn4kcH0mE",
    authDomain: "rally-cdmx-a6f5e.firebaseapp.com",
    databaseURL: "https://rally-cdmx-a6f5e.firebaseio.com",
    projectId: "rally-cdmx-a6f5e",
    storageBucket: "rally-cdmx-a6f5e.appspot.com",
    messagingSenderId: "417009986717"
  };
  
  firebase.initializeApp(config);

  $("#buttonGoogle").click(function(){
    authGoogle();
  })
  
  function authGoogle (){
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
  }
  
  function authentication(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.location.href = 'views/home.html';
      console.log(result);
      // ...
    }).catch(function(error) {
      
      var errorCode = error.code;
      console.log(error);
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }



  function pintarNombreFoto() {
    firebase.auth().onAuthStateChanged(function(user) {
      var $photoProfile = $('#photo');
      var $nameUsers = $('#name');
      var $usersComment = $('.name-comment');
      
        if (user) {
            var displayName = user.displayName;
            var photoURL = user.photoURL;
           
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            
            $photoProfile.attr('src', photoURL);
            $nameUsers.text(displayName);
            $usersComment.text(displayName);
            
        }
    });
  }
  pintarNombreFoto();
  