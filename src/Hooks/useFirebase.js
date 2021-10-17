import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";



const useFirebase = () => {
    const [user, setUser] = useState({});

    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const GoogleSignin = () => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                setUser(result);
                console.log(user);
            })
    };


    const Logout = () => {
        signOut(auth).then(() => {
            setUser({})
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    };


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
        });

    }, []);

    
    return {
        GoogleSignin,
        Logout,
        user
    };

}

export default useFirebase;

