import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'genial-motif-376109.firebaseapp.com',
  projectId: 'genial-motif-376109',
  storageBucket: 'genial-motif-376109.appspot.com',
  messagingSenderId: '100913802659',
  appId: '1:100913802659:web:568843dcad439cca623e16',
  measurementId: 'G-GFD0HL1NJL',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
