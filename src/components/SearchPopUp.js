import React from 'react'
import CloseIcon from "@material-ui/icons/Close";

export const SearchPopUp = ({ onCloseHandler }) => {
    return (
        <div className="outer-popup">
            <div className="inner-popup">
                <div className="popup-search-container">
                    <div className="popup-search-bar" >

                    </div>
                    <div className="popup-cancel-btn" onClick={onCloseHandler}>
                        <CloseIcon fontSize="medium" className="popup-close-icon" />
                    </div>
                </div>
                <div className="popup-search-users">

                </div>
            </div>
        </div>
    )
}
