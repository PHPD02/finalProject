import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA2IOtJZz4WNsYbf7Hkc2EyuRJ65GE24ys",
    authDomain: "fir-chat-619b8.firebaseapp.com",
    projectId: "fir-chat-619b8",
    storageBucket: "fir-chat-619b8.appspot.com",
    messagingSenderId: "757179979672",
    appId: "1:757179979672:web:be35c5490591c7c7227ded",
    measurementId: "G-4GFH0EN23M"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}