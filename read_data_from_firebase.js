import {
  doc,
  getDocs,
  getDoc,
  collection,
  query,
  where,
} from '@firebase/firestore';
import { db } from './firebase/firebase-config.js';
import { useState } from 'react';

const getData = async (dataType) => {
  const docRef = doc(db, 'data', dataType);
  const docSnap = await getDoc(docRef);
  const d = docSnap.data()['data'];
  // JSON.parse(d);
  return JSON.parse(d)['english_topic_menu'];
};
