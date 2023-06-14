import { Component } from 'react'
import './index.css'
import { FcLike } from 'react-icons/fc'
import { FaRegComment } from 'react-icons/fa'
import { HiShare } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

class HomePost extends Component {
    state = { isLiked: false }

    isClickedLike = () => {
        this.setState(prevState => ({ isLiked: !prevState.isLiked }))
    }

    render() {
        const { EachPost } = this.props
        const { isLiked } = this.state
        const {
            profilePic,
            userName,
            imageUrl,
            likesCount,
            caption,
            createdAt,
            commentUserName,
            comment,
            userId,
        } = EachPost

        const isLikedIcon = isLiked ? (
            <FcLike className="like-icon" onClick={this.isClickedLike} />
        ) : (
            <AiOutlineHeart className="like-icon" onClick={this.isClickedLike} />
        )

        const LikesCounted = isLiked ? likesCount + 1 : likesCount

        return (
            <>
                <div className="home-post-div-large">
                    {/* first div */}
                    <Link to={`/users/${userId}`} className="link-items">
                        <div className="profile-pic-div-large">
                            <img src={profilePic} className="profilePic" />
                            <p className="post-username">{userName}</p>
                        </div>
                    </Link>
                    {/* second div */}
                    <div className="post-image-large">
                        <img
                            src={imageUrl}
                            className="post-image"
                            onClick={this.isClickedLike}
                        />
                    </div>
                    {/* third like comment share div */}
                    <div className="like-share-div">
                        {isLikedIcon}
                        <FaRegComment className="comment-icon" />
                        <HiShare className="share-icon" />
                    </div>
                    <div className="comments-section">
                        <p className="likes-count">{LikesCounted} likes</p>
                        <p className="caption">{caption}</p>
                        <div className="two-comments">
                            <p className="comment-username">{commentUserName}</p>
                            <p className="comment-first">{comment}</p>
                        </div>
                        <p className="createdAt">{createdAt}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default HomePost
