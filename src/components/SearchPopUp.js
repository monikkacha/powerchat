import React, { useEffect } from 'react'
import CloseIcon from "@material-ui/icons/Close";
import SearchICon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import firebaseApp from '../firebaseInit';

export const SearchPopUp = ({ onCloseHandler }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [showUserList, setShowUserList] = useState([]);
    const [selectedUserList, setSelectedUserList] = useState([]);
    const [selectedUserEmail, setSelectedUserEmail] = useState('');

    const state = useSelector(state => state.firebaseUserDataReducers);

    const handleOnSearch = () => {
        if (searchQuery) {
            let list = state.userList.filter(user => user.uid !== firebaseApp.auth().currentUser.uid && user.email.includes(searchQuery));
            setShowUserList(list);
        }
    }

    const addUser = (user) => {
        setSelectedUserList([...selectedUserList, { name: user.name, email: user.email, uid: user.uid }]);
        setSelectedUserEmail(selectedUserList.length > 0 ? selectedUserEmail + " , " + user.email : selectedUserEmail + user.email);
    }

    const addFriendsOnFirebase = () => {
        if (selectedUserList.length == 0) {
            toast.warning("Please add user from above list", { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }
        firebaseApp
            .database()
            .ref("Users")
            .child(firebaseApp.auth().currentUser.uid)
            .child("friends")
            .push(selectedUserList)
            .then(data => {
                toast.success("Friends added successfully", { position: toast.POSITION.BOTTOM_CENTER })
                onCloseHandler();
            })
            .catch(err => toast.error("Something went wrong please try again later", { position: toast.POSITION.BOTTOM_CENTER }));
    }

    return (
        <div className="outer-popup">
            <div className="inner-popup">
                <div className="popup-search-container">
                    <div className="popup-search-bar" >
                        <input placeholder="Start typing here..." className="search-input" onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="popup-cancel-btn" onClick={handleOnSearch}>
                        <SearchICon fontSize="medium" className="popup-close-icon popup-search-icon" />
                    </div>
                    <div className="popup-cancel-btn" onClick={onCloseHandler}>
                        <CloseIcon fontSize="medium" className="popup-close-icon" />
                    </div>
                </div>
                <div className="popup-search-users">
                    {showUserList && showUserList.map(user => (
                        <div className="search-result-item">
                            <div className="search-result-item-inner">
                                <div className="search-result-item-info">
                                    <span className="search-item-email">{user.email}</span>
                                    <br />
                                    <span className="search-item-name">{user.name}</span>
                                </div>
                                <div className="search-item-add" onClick={() => addUser(user)}>
                                    <AddIcon fontSize="medium" className="popup-add-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="popup-search-add-list">
                    <div className="selected-email-name">{selectedUserEmail}</div>
                    <div className="search-item-add" onClick={addFriendsOnFirebase}>
                        <CheckIcon fontSize="medium" className="popup-add-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
