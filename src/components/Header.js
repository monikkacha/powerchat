import PowerChatIcon from './../images/power_chat_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import firebaseApp from '../firebaseInit';
import { updateLoggedInStatus } from '../redux/actions/setFirebaseUser';

const Header = () => {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.firebaseUserReducer);

    const logoutHandler = () => {
        firebaseApp.auth().signOut();
    }

    const logoutBtn = (
        <button className="logout-btn" onClick={logoutHandler}>Logout</button>
    );

    return (
        <div className="header-top">
            <div className="container toolbar">
                <div>
                    <img src={PowerChatIcon} alt="barnd icon" className="header-top-img" />
                    {state.isUserLoggedIn ? logoutBtn : ""}
                </div>
            </div>
        </div>
    );
}

export default Header;