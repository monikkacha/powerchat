import PowerImage from './../images/power_chat_icon.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import firebaseApp from './../firebaseInit';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';

const Login = () => {

    toast.configure();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                toast.success("User Login Successful" , { position : toast.POSITION.BOTTOM_CENTER });
            }).catch((err) => {
                switch (err.code) {
                    case "auth/user-not-found":
                        toast.error("Email or password is wrong" , { position : toast.POSITION.BOTTOM_CENTER });
                        break;
                    default:
                        toast.warning("Something went wrong please try again later" , { position : toast.POSITION.BOTTOM_CENTER });
                        break;
                }
                console.log(err);
            });
    }

    return (
        <div className="container">
            <div className="card all-center login-card">
                <img src={PowerImage} className="power-img" />
                <lable className="login-label">Username</lable>
                <input className="login-input" placeholder="Username" onChange={(e) => { setEmail(e.target.value) }} />
                <lable className="login-label">Password</lable>
                <input className="login-input" placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button className="login-btn" onClick={login}>Login</button>
                <p>Don't Have An Account ?
                    <span className="highligh-text-color">
                        <Link to="/signup"> Sign Up </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;