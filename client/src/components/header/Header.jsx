import "./header.css"
import banner from "./../../image/banner.jpg"

export default function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm">React & Node</span>
               <span className="headerTitleLg">Blog</span>
           </div>
           <img className="headerImg" src={banner} alt="missing img"/>
        </div>
    )
}