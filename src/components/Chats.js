import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import { auth } from '../firebase';
import { useHistory } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';
import axios from "axios";
// import AuthContextProvider from '../context/AuthContextProvider';
import Loader from "./Loader";

//Context
import { AuthContext } from '../context/AuthContextProvider';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "3a39cbff-f694-4585-af1d-11fc702936fa",
                "user-name": user.email,
                "user-secret": user.uid
            },
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() =>{
            let formdata = new FormData(); 
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getPhoto(user.photoURL)
                .then( avatar  => {
                        formdata.append("avatar", avatar, avatar.name);
                        axios.post("https://api.chatengine.io/users/", formdata,{
                        headers: {
                                "private-key": "62df2de3-fa47-4fac-b42e-41d871e574ad",
                            }
                            })
                            .then(() => {
                                setLoading(false)
                            })
                            .catch(error => console.log(error))
                })
        })
    }, [user, history])

    const logOutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    const getPhoto = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "user-photo.jpg", {type: "image/jpeg"})
    }

    if ( !user || loading ) return <Loader />;

    return (
        <div>
            <Navbar logOutHandler={logOutHandler} />
            <ChatEngine 
                height="calc(100vh - 60px)"
                projectID= "3a39cbff-f694-4585-af1d-11fc702936fa"
                userName= {user.email}
                userSecret= {user.uid}
            />
        </div>
    );
};

export default Chats;