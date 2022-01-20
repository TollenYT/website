import "./topbar.css"
import person from "./../../image/person.jpg"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-snapchat"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-tiktok"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                        <li className="topListItem">
                            <Link to="/" className="link">HOME</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/" className="link">ABOUT</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/" className="link">CONTACT</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/write" className="link">WRITE</Link>
                        </li>
                        <li className="topListItem">
                            {user && "LOGOUT"}
                        </li>
                    </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img src={person} alt="missing img" className="topImg" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}