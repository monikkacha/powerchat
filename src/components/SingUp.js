import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PowerImage from './../images/power_chat_icon.png';
import firebaseApp from '../firebaseInit';
import { useSelector, useDispatch } from 'react-redux';
import { setFirebaseUser } from './../redux/actions/setFirebaseUser';

const SingUp = () => {

    const dispatch = useDispatch();
    toast.configure();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signUp = () => {
        dispatch(setFirebaseUser({
            name: name, email: email, password: password, friends: [
                { },
            ]
        }));
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user.user.uid);
                toast.success("User registered successfully", { position: toast.POSITION.BOTTOM_CENTER });
            }).catch((err) => {
                console.log(err);
                switch (err.code) {

                    case "auth/email-already-in-use":
                        toast.error(err.message, { position: toast.POSITION.BOTTOM_CENTER });
                        break;
                    case "auth/weak-password":
                        toast.error(err.message, { position: toast.POSITION.BOTTOM_CENTER });
                        break;
                    default:
                        toast.error("Something went wrong please try again later", { position: toast.POSITION.BOTTOM_CENTER });
                        break;
                }
                dispatch(setFirebaseUser({ name: "", email: "", password: "" }));
            });
    }

    return (
        <div className="container">
            <div className="card all-center login-card">
                <img src={PowerImage} className="power-img" />
                <lable className="login-label">Username</lable>
                <input className="login-input" placeholder="Username" onChange={(e) => { setName(e.target.value) }} />
                <lable className="login-label">Email</lable>
                <input className="login-input" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                <lable className="login-label">Password</lable>
                <input className="login-input" placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button className="login-btn" onClick={signUp}>Sign Up</button>
                <p>Already Have An Account ?
                    <span className="highligh-text-color">
                        <Link to="/login">
                            &nbsp; Login
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SingUp;