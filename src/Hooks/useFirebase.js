import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error , setError] = useState('')

    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const GoogleSignin = () => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                setUser(result);
                console.log(user);
            })
    };

    // Email Pass Reg

    const EmailChange = e => {
        setEmail(e.target.value);
    }

    const PasswordChange = e => {
        setPassword(e.target.value);
    
    };
    const Nameupdate = e => {
        setUserName(e.target.value);
    }
        const SignupWithEmail = (e) => {

            e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    
                    setUser(result);
                    console.log(user)
                    setError('')
                })
                .catch(error => {
                    setError(error.message);
            })
        }


        const Logout = () => {
            signOut(auth).then(() => {
                setUser({})
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });

        };

    // Login With Email pass
    const EmailLogin = (email, password) => {
        // emaipreventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result);
                setError('');
            })
        
            .catch(error => {
                    setError(error.message);
            })
        }

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
    
    // Update username
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => {
            
        })
        }

    
        return {
            GoogleSignin,
            Logout,
            user,
            error,
            EmailLogin,
            EmailChange,
            PasswordChange,
            Nameupdate,
            setUserName,
            SignupWithEmail
        };

    };
export default useFirebase;