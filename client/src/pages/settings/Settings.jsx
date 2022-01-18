import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
import person from "./../../image/person.jpg"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="settingsPPImg" src={person} alt="missing img" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Severin"/>
                    <label>Username</label>
                    <input type="email" placeholder="severin.herrmann@gmail.com"/>
                    <label>Username</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}