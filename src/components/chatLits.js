import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const ChatList = ({ currentChatId }) => {

    // const [chats , setChats] = useState([]);

    const chatState = useSelector(state => state.firebaseChatReducers);
    // useEffect(() => { 
    //     setChats(chatState.chats);
    // }, [chatState.chats]);
    

    return (
        <div className="main-chat-container">
            {
                chatState.chats.map(chat => {

                    if (chat.from == currentChatId) {
                        return (
                            <div className="single-chat-container">
                                <div>
                                    <div className="from-msg-wrapper">{chat.msg}</div>
                                </div>
                                <div className="expander"></div>
                            </div>
                        );
                    }

                    if (chat.to == currentChatId) {
                        return (
                            <div className="single-chat-container">
                                <div className="expander"></div>
                                <div>
                                    <div className="to-msg-wrapper">{chat.msg}</div>
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
    );

}
