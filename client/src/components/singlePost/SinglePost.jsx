import "./singlePost.css"
import image from "./../../image/banner.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={image} alt="missing img" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Severin</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptatum, repudiandae dicta, nostrum nisi amet natus, et quae consequatur adipisci odio? Esse voluptas vero magni omnis accusantium quaerat nobis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptatum, repudiandae dicta, nostrum nisi amet natus, et quae consequatur adipisci odio? Esse voluptas vero magni omnis accusantium quaerat nobis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptatum, repudiandae dicta, nostrum nisi amet natus, et quae consequatur adipisci odio? Esse voluptas vero magni omnis accusantium quaerat nobis.
                </p>
            </div>
        </div>
    )
}