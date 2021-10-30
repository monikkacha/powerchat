import { useSelector } from 'react-redux'
import SadEmojiIcon from "@material-ui/icons/SentimentDissatisfied";
import SendIcon from "@material-ui/icons/Send";

function ChatComponent() {

    const state = useSelector(state => state.firebaseUserDataReducers);

    return (
        <div className="chat-rest-container">
            <div className="user-list-container">
                {
                    state.currentUserData.friends ?
                        state.currentUserData.friends.map(friend => (
                            <div className="friend-item">
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
                    chat data here
                </div>
                <div className="chat-data-controllers">
                    <div className="send-msg-input">
                        <input />
                    </div>
                    <div className="send-btn-container">
                        <div className="send-btn-wrapper">
                            <SendIcon fontSize="medium"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent