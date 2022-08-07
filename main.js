const firebaseConfig = {
  apiKey: "AIzaSyBM4Efhuo3N5slbtnDFbxHICYWyCI2o6UE",
  authDomain: "number-4f0e4.firebaseapp.com",
  databaseURL: "https://number-4f0e4-default-rtdb.firebaseio.com",
  projectId: "number-4f0e4",
  storageBucket: "number-4f0e4.appspot.com",
  messagingSenderId: "446002127376",
  appId: "1:446002127376:web:9e3ba5ea3be9ff686a2095",
  measurementId: "G-D1YWBKTG76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  s = document.getElementById("userName").value;
  firebase.database().ref("/").child(s).update({
    purpose: "Adding User"
  });
  window.location = "screen.html";
}