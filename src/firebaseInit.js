import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATCgOhZcSHKJgmRfrxcWHrT-sMwN7kFsc",
    authDomain: "powerchat-1d5b9.firebaseapp.com",
    projectId: "powerchat-1d5b9",
    storageBucket: "powerchat-1d5b9.appspot.com",
    messagingSenderId: "490642852332",
    appId: "1:490642852332:web:992cdadddff7d445ae98c9",
    measurementId: "G-XW823CFQDZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;