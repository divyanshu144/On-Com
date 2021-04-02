import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="https://365psd.com/images/istock/previews/1063/106340965-chat-icon-vector-blue.jpg" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to OnCom</h1>
                </div>
                <Button type="submit" varient="primary" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
