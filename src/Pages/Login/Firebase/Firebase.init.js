import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';

const initFirebaseAuth = () => {
	initializeApp(firebaseConfig);
};
export default initFirebaseAuth;
