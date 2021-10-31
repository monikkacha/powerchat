import { useSelector } from 'react-redux'
import { useState } from 'react';
import SadEmojiIcon from "@material-ui/icons/SentimentDissatisfied";
import SendIcon from "@material-ui/icons/Send";
import { addUpdateCurrentChatId } from '../redux/actions/chatActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import firebaseApp from "./../firebaseInit";

function ChatComponent() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.firebaseUserDataReducers);
    const chatState = useSelector(state => state.firebaseChatReducers);
    const [chatQuery, setChatQuery] = useState('');

    const changeFriend = (friend) => {
        dispatch(addUpdateCurrentChatId(friend.uid));
    }

    const sendMsg = () => {

        // first setting data on own tree
        firebaseApp
        .database()
        .ref("Chats")
        .child(firebaseApp.auth().currentUser.uid)
        .push({"msg" : chatQuery , "from" : firebaseApp.auth().currentUser.uid , "to" : chatState.currentChatUserId})
        .then(data => {})
        .catch(err => toast.error("Something went wrong please try again later", { position: toast.POSITION.BOTTOM_CENTER }));

        // setting data for receiver node
        firebaseApp
        .database()
        .ref("Chats")
        .child(chatState.currentChatUserId)
        .push({"msg" : chatQuery , "from" : firebaseApp.auth().currentUser.uid , "to" : chatState.currentChatUserId})
        .then(data => {})
        .catch(err => toast.error("Something went wrong please try again later", { position: toast.POSITION.BOTTOM_CENTER }));

        setChatQuery('');
    }

    return (
        <div className="chat-rest-container">
            <div className="user-list-container">
                {
                    state.currentUserData.friends ?
                        state.currentUserData.friends.map(friend => (
                            <div className="friend-item" onClick={() => changeFriend(friend)}>
                                <div className="friend-item-inner">
                                    <div className="friend-name-initial">
                                        {friend.name.toString().toUpperCase().charAt(0)}
                                    </div>
                                    <div>
                                        <div className="friend-name">{friend.name}</div>
                                        <div className="friend-email">{friend.email}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className="no-friends">
                            <div>
                                <SadEmojiIcon fontSize="large" className="sad-icon" />
                            </div>
                            <div>
                                You Have No Friend ! <br />
                                Search From Above
                            </div>
                        </div>
                }
            </div>
            <div className="chat-list-container">
                <div className="chat-data-list">

                </div>
                <div className="chat-data-controllers">
                    <div className="send-msg-input">
                        <input onChange={(e) => setChatQuery(e.target.value)} />
                    </div>
                    <div className="send-btn-container">
                        <div className="send-btn-wrapper" onClick={sendMsg}>
                            <SendIcon fontSize="medium" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent
