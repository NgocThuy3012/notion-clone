importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAJS_6gkm9or3UYvrgSBHgE53otccypdSk",
  authDomain: "fir-fcm-42c7c.firebaseapp.com",
  projectId: "fir-fcm-42c7c",
  storageBucket: "fir-fcm-42c7c.appspot.com",
  messagingSenderId: "353076825743",
  appId: "1:353076825743:web:25b33525d3cf9c96486afa",
  measurementId: "G-3C2Z4DE3L1",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// const messaging = getMessaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/error.png",
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions?.body
  );
});
