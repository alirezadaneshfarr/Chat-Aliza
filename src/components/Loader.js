import React from 'react';

import "../styles/Loader.scss";

const Loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" , alignItems: "center" , flexDirection: "column" , marginTop: "350px"}}>
            <div className="lds-dual-ring"></div>
            <br />
            <h3>Loading ...</h3>
        </div>
    );
};

export default Loader;