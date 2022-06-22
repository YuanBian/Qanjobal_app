// INSTRUCTION: node --experimental-json-modules add_data_to_firebase.js
import { app, db } from './firebase/firebase-config.js';
import data from './data/data.json';
import { doc, setDoc, deleteDoc } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

for (const [key, value] of Object.entries(data)) {
  console.log('Added: ' + key);
  await setDoc(doc(db, 'data', key), { data: JSON.stringify(value) });
}

// const glossary = data['glossary'];
// for (const [key, value] of Object.entries(glossary)) {
//   console.log('Added: ' + key);
//   await setDoc(doc(db, 'glossary', key), value);
// }

// const menus = data['menus'];
// for (const [key, value] of Object.entries(menus)) {
//   console.log('Added: ' + key);
//   await setDoc(doc(db, 'menus', key), value);
// }

// const jsonData = require('./data/data.json');
// const data_string = jsonData.stringify();
// console.log(data_string);
// await setDoc(doc(db, 'data', "data"), );
