import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import * as data from './data/data.json';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYiKsKsDW0I3cfNbhkSpGHqXzZPGCJ9ow',
  authDomain: 'qanjobalfirebase.firebaseapp.com',
  projectId: 'qanjobalfirebase',
  storageBucket: 'qanjobalfirebase.appspot.com',
  messagingSenderId: '350004853310',
  appId: '1:350004853310:web:0721c9af4a1a95321def6f',
  databaseURL: 'https://qanjobalfirebase-default-rtdb.firebaseio.com',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
