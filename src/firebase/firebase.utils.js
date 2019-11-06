import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDe6pr01NaM7SkgymjW0FpYPH47mBAPhA8",
	authDomain: "crwn-db-5ebdc.firebaseapp.com",
	databaseURL: "https://crwn-db-5ebdc.firebaseio.com",
	projectId: "crwn-db-5ebdc",
	storageBucket: "crwn-db-5ebdc.appspot.com",
	messagingSenderId: "156847531276",
	appId: "1:156847531276:web:142365fd7a6849d815d529"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

