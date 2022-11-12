import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyALnMwD8JV0op95-TpjU-ffHvJ0Ugr48oM',
    authDomain: 'react-tutorial-212d0.firebaseapp.com',
    projectId: 'react-tutorial-212d0',
    storageBucket: 'react-tutorial-212d0.appspot.com',
    messagingSenderId: '806621263427',
    appId: '1:806621263427:web:3fb1bc29fd881b34b546f6',
    measurementId: 'G-5PGT2GNQXW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export { auth };
// export const database = getDatabase(app);
// export const fStore = getFirestore(app);
// export const fStorage = getStorage(app);
