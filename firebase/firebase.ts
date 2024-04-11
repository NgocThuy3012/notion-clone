// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJS_6gkm9or3UYvrgSBHgE53otccypdSk",
  authDomain: "fir-fcm-42c7c.firebaseapp.com",
  projectId: "fir-fcm-42c7c",
  storageBucket: "fir-fcm-42c7c.appspot.com",
  messagingSenderId: "353076825743",
  appId: "1:353076825743:web:25b33525d3cf9c96486afa",
  measurementId: "G-3C2Z4DE3L1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);

export const requestPermission = async () => {
  console.log("Requesting permission...");
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }

  return permission;
};

// const serverKey =
//   "AAAAUjUEzo8:APA91bECJv3itoprFjuPOocQg1B7LOa7FXxw8sq9fcryIKK5FkH2n2ZfD6I7IVxvO2oxMDVteM2Uwj5wkkwYNzp-PQAAvlKMJ-pqykua1Pe2edRt3ZAOZWlOodVGibcPZ8BL0K7m8Gum";

// const VAPIDKey =
//   "BEy8s-hH_-o57kBGWG7zoqv-rRkyQGqFM_QkIXi27jtDx-tMtPwZE1sWReTxzhYhHxH46Uf6JrOvnZ5vxtA7rls";
