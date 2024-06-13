// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyA-yIswJ4hkHlEXC1KxT090uSUCSUgXwoQ',
	authDomain: 'cv-test-f8ce9.firebaseapp.com',
	projectId: 'cv-test-f8ce9',
	storageBucket: 'cv-test-f8ce9.appspot.com',
	messagingSenderId: '211282986078',
	appId: '1:211282986078:web:7861e12e04d34249d8a0cf',
	measurementId: 'G-NGBJHMFGVH',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getDatabase(firebaseApp);
// const analytics = getAnalytics(app);
