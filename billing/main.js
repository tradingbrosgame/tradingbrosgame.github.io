// Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBBghWB_G8XhhTnPMSHxX4Aj_rExRpEn8Y",
        authDomain: "tradingbros-c381b.firebaseapp.com",
        databaseURL: "https://tradingbros-c381b-default-rtdb.firebaseio.com/",
        projectId: "tradingbros-c381b",
        storageBucket: "test-dae29.appspot.com",
        messagingSenderId: "195245932266",
        appId: "1:1025157620468:android:6bb4e3ed08c82ea09574a1"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      var firebaseRef = firebase.database().ref().child('login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          if (username.value==loginInfo.username && password.value==loginInfo.password){
            location.replace("home.html");
          }else if(username.value!=loginInfo.username){
            username.style.borderColor="red";
          }else if(password.value!=loginInfo.password){
            password.style.borderColor="red";
          }
        });
      });

      document.getElementById('pass').addEventListener("input",function(){
        document.getElementById("pass").style.borderColor="#ccc";
      });
      document.getElementById('username').addEventListener("input",function(){
        document.getElementById("username").style.borderColor="#ccc";
      });