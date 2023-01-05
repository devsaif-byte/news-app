import { useEffect, useState } from "react";
import initAuthentication from "../firebase/firebase.init";
// -----
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const initAuth = initAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const auth = getAuth(initAuth);

	const signInGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider).then((result) => {
			setUser(result.user);
		});
	};
	// State change observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				// User is signed out
				setUser({});
			}
		});
		return () => unsubscribe;
	}, []);

	const logOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((err) => console.log(err));
	};
	return {
		user,
		signInGoogle,
		logOut,
	};
};

export default useFirebase;
