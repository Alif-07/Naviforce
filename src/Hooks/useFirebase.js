import React, { useEffect, useState } from 'react';
import initFirebaseAuth from '../Pages/Login/Firebase/Firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';

initFirebaseAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const [admin, setAdmin] = useState(false);

	const auth = getAuth();

	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	const registerUser = (name, email, password, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				//save user to database
				saveUser(email, name);
				//send name to firebase
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {
						// Profile updated!
						// ...
					})
					.catch((error) => {
						// An error occurred
						// ...
					});
				setAuthError('');
				history.replace('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				setAuthError(error.message);
				// ..
			})
			.finally(() => setIsLoading(false));
	};
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setIsLoading(false));
	};
	useEffect(() => {
		setIsLoading(true);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);
	useEffect(() => {
		fetch(`https://floating-cliffs-55583.herokuapp.com/user/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);
	const saveUser = (email, displayName) => {
		const user = { email, displayName };
		fetch('https://floating-cliffs-55583.herokuapp.com/user', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	return {
		admin,
		user,
		registerUser,
		loginUser,
		logOut,
		isLoading,
		setIsLoading,
	};
};

export default useFirebase;
