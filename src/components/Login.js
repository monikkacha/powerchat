import PowerImage from './../images/power_chat_icon.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="container">
            <div className="card all-center login-card">
                <img src={PowerImage} className="power-img" />
                <lable className="login-label">Username</lable>
                <input className="login-input" placeholder="Username" />
                <lable className="login-label">Password</lable>
                <input className="login-input" placeholder="Password" type="password" />
                <button className="login-btn">Login</button>
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