import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchPopUp } from "./SearchPopUp";
import firebaseApp from "./../firebaseInit";
import { updateLoggedInStatus } from "../redux/actions/setFirebaseUser";
import { setAvailableUserList, setCurrentUserData } from "../redux/actions/firebaseUsersAction";
import ChatComponent from "./ChatComponent";

export const Dashboard = () => {

    const state = useSelector(state => state.firebaseUserReducer);
    const dispatch = useDispatch();
    const [isShowPopup, setIsShowPopUp] = useState(false);
    useEffect(() => initData(), []);

    const initData = () => {
        if (Object.keys(state.userData).length !== 0) {
            addUserOnFirebase();
        } else {
            getUserData();
        }
    };

    const getUserData = () => {
        firebaseApp.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user != null) {
                getCurrentUserProfile();
                getAvailableUserList();
            }
        });
    }

    const getCurrentUserProfile = () => {
        firebaseApp
            .database()
            .ref("Users")
            .child(firebaseApp.auth().currentUser.uid)
            .once("value", snapshot => {
                dispatch(setCurrentUserData(snapshot.val()));
            })
            .catch(err => {
                console.log(err);
            });
    }

    const getAvailableUserList = () => {
        firebaseApp
            .database()
            .ref("Users")
            .on("value", snapshot => {
                dispatch(setAvailableUserList(snapshot.val()));
            });
    }

    const addUserOnFirebase = () => {
        if (firebaseApp.auth().currentUser === null) {
            return;
        }
        if (state.isNewAccount) {
            const userData = state.userData;
            firebaseApp.database().ref("Users")
                .child(firebaseApp.auth().currentUser.uid)
                .set(
                    { ...userData, uid: firebaseApp.auth().currentUser.uid.toString() }
                )
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
                        <ChatComponent />
                    </div>
                </div>
            </div>
            {isShowPopup ? <SearchPopUp onCloseHandler={showHidePopUp} /> : ""}
        </div>
    );
}