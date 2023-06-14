import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';
import BackGround from './BackGround';

//Icon
import googleIcon from "../svg/google2.png";

//styles 
import styles from "../styles/Login.module.scss";

const Login = () => {
    return (
        <>
        <BackGround />
        <div className={styles.mainContainer}>
            <div className={styles.welcome}>
                <h2>Wellcome To AliZaGram</h2>
                <div onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className={styles.btn}>
                    <img className={styles.icon} src={googleIcon} alt="Google" />
                    Sign in with Google
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;