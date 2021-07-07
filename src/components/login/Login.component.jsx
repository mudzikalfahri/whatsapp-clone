import React from 'react';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../stateprovider';
import './login.styles.scss';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:'SET_USER',
                user: result.user
            })
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            
            <img className='logo' src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" alt="" />
            <h3>Whatsapp clone</h3>
            <a href='https://github.com/mudzikalfahri'>
                <p>Made by mudzikal</p>
            </a>
            <button onClick={signIn}>Login with Google</button>
        </div>
    )
}

export default Login
