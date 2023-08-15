importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");




firebase.initializeApp({
    apiKey: "AIzaSyA1FPaY7hWxiLClH3Ci-MzqutHM9wBj9xU",
    authDomain: "mehan-elryad.firebaseapp.com",
    projectId: "mehan-elryad",
    storageBucket: "mehan-elryad.appspot.com",
    messagingSenderId: "205727913858",
    appId: "1:205727913858:web:39253461f1c6e77719e19b",
    measurementId: "G-Z3W5WBW0YT"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});