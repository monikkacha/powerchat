import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchPopUp } from "./SearchPopUp";

export const Dashboard = () => {

    const state = useSelector(state => state.firebaseUserReducer);

    const [isShowPopup, setIsShowPopUp] = useState(false);

    useEffect(() => initData(), []);

    const initData = () => {
        if (Object.keys(state.userData).length !== 0) {
            addUserOnFirebase();
        } else {
            getUserList();
        }
    };

    const addUserOnFirebase = () => {
        if (state.isNewAccount) {
            console.log("we are in addUserOnFirebase function");
            firebaseApp.database().ref("Users")
                .child(state.userData.uid)
                .set(state.userData)
                .then(
                    (data) => {
                        dispatch(updateLoggedInStatus(true));
                    }).catch((err) => {
                        console.log(err);
                    });
        }
    }

    const showHidePopUp = () => {
        setIsShowPopUp(!isShowPopup);
    }

    return (
        <div>
            <div className="container">
                <div className="chat-container">
                    <div className="chat-container-sub">
                        <div className="chat-header-container">
                            <div className="chat-header-search-bar">
                                <div className="user-find-circle" onClick={showHidePopUp}>
                                    <SearchIcon className="search-icon" fontSize="large" />
                                </div>
                            </div>
                            <div className="chat-header-name-bar">

                            </div>
                        </div>
                        <div className="chat-rest-container">
                            <div className="user-list-container">
                            </div>
                            <div className="chat-list-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowPopup ? <SearchPopUp onCloseHandler={showHidePopUp} /> : ""}
        </div>
    );
}