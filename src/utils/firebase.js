import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDE84v0NmDqQ1RSRhRVyLueAeBbIFroYns',
  authDomain: 'voy-atra.firebaseapp.com',
  projectId: 'voy-atra',
  storageBucket: 'voy-atra.appspot.com',
  messagingSenderId: '40523979507',
  appId: '1:40523979507:web:ae7c9c9f5f449fba10f586'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
