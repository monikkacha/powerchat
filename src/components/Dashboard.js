import SearchIcon from "@material-ui/icons/Search";
export const Dashboard = () => {
    return (
        <div className="container">
            <div className="chat-container">
                <div className="chat-container-sub">
                    <div className="chat-header-container">
                        <div className="chat-header-search-bar">
                            <div className="user-find-circle">
                                <SearchIcon className="search-icon" fontSize="large"/>
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
    );
}