import { Component } from 'react'
import './index.css'

class MyProfileDetailPost extends Component {
    render() {
        const { myProfileListData } = this.props
        const {
            followersCount,
            profileId,
            postsCount,
            profilePic,
            userBio,
            userName,
            userId,
            followingCount,
        } = myProfileListData

        return (
            <>
                <div className="trail-div">
                    <div className="myprofile-details-large">
                        <img src={profilePic} className="myprofile-profile-pic-large" />
                        <div className="myprofile-top-details-large">
                            <p className="myprofile-username-large">{userName}</p>
                            <div className="followers-following-posts-div-large">
                                <p className="myprofile-posts-count-large">
                                    {postsCount}
                                    <span className="span">posts</span>
                                </p>
                                <p className="myprofile-followers-large">
                                    {followersCount}
                                    <span className="span">followers</span>
                                </p>
                                <p className="myprofile-following-large">
                                    {followingCount} <span className="span">following</span>
                                </p>
                            </div>
                            <p className="myprofile-userid-large">{userId}</p>
                            <p className="myprofile-userbio-large">{userBio}</p>
                        </div>
                    </div>
                </div>
                <div className="myprofile-details-small">
                    <p className="myprofile-username-large">{userId}</p>
                    <div className="myprofile-top-details-small">
                        <img src={userName} className="myprofile-profile-pic-large" />
                        <div className="three-items">
                            <div className="two-div-small">
                                <p className="mp-postscount-small">{postsCount}</p>
                                <p className="posts-small">posts</p>
                            </div>
                            <div className="two-div-small">
                                <p className="mp-followers-small">{followersCount}</p>
                                <p className="followers-small">followers</p>
                            </div>
                            <div className="two-div-small">
                                <p className="mp-following-small">{followingCount}</p>
                                <p className="following-small">following</p>
                            </div>
                        </div>
                    </div>
                    <p className="userid-small-mp">{userId}</p>
                    <p className="userbio-small-mp">{userBio}</p>
                </div>
            </>
        )
    }
}
export default MyProfileDetailPost
