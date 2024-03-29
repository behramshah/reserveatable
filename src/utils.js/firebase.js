import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signOut,
    signInWithPopup,
    signInWithRedirect, 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
 } from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRHANDiSue7JqYEPWd-SpffFqH_Zm6arI",
    authDomain: "reservetable-9eccb.firebaseapp.com",
    projectId: "reservetable-9eccb",
    storageBucket: "reservetable-9eccb.appspot.com",
    messagingSenderId: "663493370267",
    appId: "1:663493370267:web:b36feb346bf20c0ac0c13e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc( userDocRef,
                 {
                     email,
                     createdAt,
                     displayName,
                     ...additionalInformation,
                 });
        } catch (error) {
             console.log('Error message:', error.message);
         }
    }

    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);