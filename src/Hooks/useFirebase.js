import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Pages/Shared/Header/SignIn/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    // hooks
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // getting input value
    const handleNameInput = event => {
        setName(event.target.value);
    };
    const handleEmailInput = event => {
        setEmail(event.target.value);
    };
    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    const handleResistration = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('At least 6 charecter!!!');
            return;
        };

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('two uppercase letters!!!');
            return;
        };

        // createUserWithEmailAndPassword
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUserName();
            setError('');
        })
        .catch(error => {
            setError(error.message);
        });
    }

    const handleSignIn = event => {
        event.preventDefault();

        if (password.length < 6) {
            setError('At least 6 charecter!!!');
            return;
        };

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('two uppercase letters!!!');
            return;
        };

        // signInWithEmailAndPassword
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        });
    }
    
    // updateProfile
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(() => {
            // Profile updated!
        })

        .catch(error => {
            setError(error.message);
        });
    };

    // googleSignIn
    const googleSignIn = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false);
        });

        return () => unsubscribed;
    }, []);
    
    const logOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setIsloading(false);
        });
    };

    // returns
    return {
        user,
        googleSignIn,
        logOut,
        isLoading,
        handleResistration,
        handleNameInput,
        handleEmailInput,
        handlePasswordInput,
        error,
        handleSignIn,
        setUser,
        setIsloading
    };
};

export default useFirebase;