import React, { useEffect } from 'react'

export const ChatList = ({ chats, currentChatId }) => {

    // useEffect(() => { 

    // }, []);


    return (
        <div className="main-chat-container">
            {
                chats.map(chat => {
                    if (chat.from === currentChatId) {
                        return (
                            <div className="single-chat-container">
                                <div>
                                    <div>{chat.msg}</div>
                                </div>
                                <div></div>
                            </div>
                        );
                    }
                    if (chat.to === currentChatId) {
                        return (
                            <div className="single-chat-container">
                                <div></div>
                                <div>
                                    <div>{chat.msg}</div>
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
    );

}
