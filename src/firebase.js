import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA63FMDKvBjvgb_dmXLcYVzmO-nMApX5IU",
    authDomain: "soltech-44ff9.firebaseapp.com",
    projectId: "soltech-44ff9",
    storageBucket: "soltech-44ff9.firebasestorage.app",
    messagingSenderId: "8300140386",
    appId: "1:8300140386:web:6fd96b02d52afbd73cbe3b",
    measurementId: "G-P47JJDJLSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Google provider
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };