import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import facebookLogo from '../../images/fb-2.jpg';
import googleLogo from '../../images/google-2.jpg';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    document.title="Let'sGO!/Login";
    const [option, setOption] = useState('register');
    const [createUser, setCreateUser] = useState(false);

    const [newUser, setNewUser] = useState({
        isSignedIn: false,
        createNewUser: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        photo: ""
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signInUser = {
                    name: displayName,
                    photo: photoURL,
                    email
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signInUser = {
                    name: displayName,
                    photo: photoURL,
                    email
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    //Log in using email and password
    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...newUser };
            newUserInfo[e.target.name] = e.target.value;
            setNewUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (createUser && newUser.email && newUser.password) {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then((res) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setCreateUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setCreateUser(newUserInfo);
                });
        }

        if (!createUser && newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setNewUser(newUserInfo);
                    //............
                    setLoggedInUser(newUser);
                    history.replace(from);

                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo);
                });
        }
        e.preventDefault();
    }


    return (

        <div className="container my-5 login-style">
            <div className="row">
                <div className="col-md-6">
                    <p>Stay in touch with</p>
                    <h4>Let's<span className="text-primary">GO!</span></h4>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {
                            createUser ? <h2>Sign Up</h2> : <h2>Sign In</h2>
                        }
                        {
                            createUser && <input type="text" onChange={handleChange} name="name" id="" className="form-control" placeholder="Enter your name" required />
                        }
                        <br />
                        <input type="text" onChange={handleChange} name="email" id="" className="form-control" placeholder="Email" required />
                        <br />
                        <input type="password" onChange={handleChange} name="password" id="" className="form-control" placeholder="Password" required />
                        <br />
                        {
                            createUser ? <input type="submit" className="form-control btn btn-info" value="Submit" /> : <input type="submit" className="form-control btn btn-info" value="Sign in" />
                        }
                        <br /><br />
                        <input type="checkbox" onChange={() => setCreateUser(!createUser)} name="createNewUser" id="" />
                        <label htmlFor="createNewUser">New user? Sing Up</label>

                        <br /><br />
                        <p className="text-danger">{newUser.error || createUser.error}</p>
                        {
                            createUser.success && <p className="text-success">User created successfully</p>
                        }
                    </form>
                    <div className="d-flex justify-content-center align-items-center mt-4 text-secondary">
                        <span className="me-2">Or continue with </span>

                        {/* <Link onClick={handleFacebookSignIn} className="text-primary">Facebook</Link> */}
                        <img onClick={handleFacebookSignIn} style={{ width: 200, cursor: 'pointer' }} src={facebookLogo} alt="" />
                        <img onClick={handleGoogleSignIn} style={{ width: 130, cursor: 'pointer' }} src={googleLogo} alt="" />
                    </div>
                </div>

            </div>
        </div>



        // <div className="text-center login-form">
        //     <div className="container mt-5 styleForm">
        //     <form onSubmit={handleSubmit}>
        //         {
        //             createUser ? <h2>Sign Up</h2> : <h2>Sign In</h2>
        //         }
        //         {
        //             createUser && <input type="text" onChange={handleChange} name="name" id="" className="form-control" placeholder="Enter your name" required />
        //         }
        //         <br />
        //         <input type="text" onChange={handleChange} name="email" id="" className="form-control" placeholder="Email" required />
        //         <br />
        //         <input type="password" onChange={handleChange} name="password" id="" className="form-control" placeholder="Password" required />
        //         <br />
        //         {
        //             createUser ? <input type="submit" className="form-control btn btn-info" value="Submit" /> : <input type="submit" className="form-control btn btn-info" value="Sign in" />
        //         }
        //         <br /><br />
        //         <input type="checkbox" onChange={() => setCreateUser(!createUser)} name="createNewUser" id="" />
        //         <label htmlFor="createNewUser">New user? Sing Up</label>

        //         <br /><br />
        //         <p className="text-danger">{newUser.error || createUser.error}</p>
        //         {
        //             createUser.success && <p className="text-success">User created successfully</p>
        //         }
        //     </form>
        // </div>
        // <div className="d-flex justify-content-center align-items-center mt-4 text-secondary">
        //     <span className="me-2">Or continue with </span>
        //     <img onClick={handleFacebookSignIn} style={{ width: 200, cursor: 'pointer' }} src={facebookLogo} alt="" />
        //     <img onClick={handleGoogleSignIn} style={{ width: 130, cursor: 'pointer' }} src={googleLogo} alt="" />
        // </div>
        // </div>
    );
};

export default Login; <p>This is login</p>