import React from 'react';
import styles from "../styles/Navbar.module.scss";

const Navbar = ({logOutHandler}) => {
    return (
        <div className={styles.container}>
            <div>
                <h2>AlizaGram</h2>
            </div>
            <div className={styles.logout} onClick={logOutHandler}>
                LogOut
            </div>
        </div>
    );
};

export default Navbar;