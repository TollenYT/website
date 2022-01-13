import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-snapchat"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-tiktok"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                        <li className="topListItem">HOME</li>
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT</li>
                        <li className="topListItem">WRITE</li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
            </div>
            <div className="topRight">
                <i className="topImg fas fa-user-circle"></i>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}