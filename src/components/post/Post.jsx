import "./post.css"
import image from "./../../image/banner.jpg"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={image} alt="missing img"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officiis maxime nesciunt voluptate aut aliquid iste perspiciatis exercitationem eveniet dolorum mollitia, provident, alias laudantium adipisci temporibus eaque? Similique, aut veniam.</p>
        </div>
    )
}