import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogIn = () => {

        // google auth
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // github auth 
    const handleGithubSingIn = () =>{

        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                // console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            {/* user ? logout : Sing in */}
            {
                user ?
                    <>
                        <button onClick={handleSingOut}>Sing Out</button>
                    </>
                    :
                    <>
                        <button onClick={handleGoogleLogIn}>Google Login</button>
                        <button onClick={handleGithubSingIn}>Github Login</button>
                    </>
            }

            {/* conditional state */}
            {user && <div>
                <h4>User: {user.displayName}</h4>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}

        </div>
    );
};

export default Login;