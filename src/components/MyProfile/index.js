import { Component } from 'react'
import Cookies from 'js-cookie'
import { BsGrid3X3 } from 'react-icons/bs'
import Header from '../Header'
import MyProfileDetailPost from '../MyProfileDetailPost'
import MyProfileStory from '../MyProfileStory'
import MyProfileUserPost from '../MyProfileUserPost'

import './index.css'

class MyProfile extends Component {
    state = {
        myProfileListData: {},
        myProfileStoriesList: [],
        myProfilePostsList: [],
    }

    componentDidMount() {
        this.getMyProfileData()
    }

    getMyProfileData = async () => {
        const {
            myProfileListData,
            myProfileStoriesList,
            myProfilePostsList,
        } = this.state
        const url = 'https://apis.ccbp.in/insta-share/my-profile'
        const token = Cookies.get('jwt_token')
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
        }
        const response = await fetch(url, options)
        const data = await response.json()
        const profileData = data.profile
        const CamelCaseProfileData = {
            followersCount: profileData.followers_count,
            profileId: profileData.id,
            postsCount: profileData.posts_count,
            profilePic: profileData.profile_pic,
            userBio: profileData.user_bio,
            userName: profileData.user_name,
            userId: profileData.user_id,
            followingCount: profileData.following_count,
        }

        const followersCountConverted = profileData.followers_count

        const myProfilePosts = profileData.posts.map(EachPost => ({
            id: EachPost.id,
            image: EachPost.image,
        }))

        const myProfileStories = profileData.stories.map(EachStory => ({
            id: EachStory.id,
            image: EachStory.image,
        }))

        this.setState({
            myProfileListData: CamelCaseProfileData,
            myProfileStoriesList: myProfileStories,
            myProfilePostsList: myProfilePosts,
        })
    }

    render() {
        const {
            myProfileStoriesList,
            myProfilePostsList,
            myProfileListData,
        } = this.state
        const postsLength = myProfilePostsList.length
        return (
            <div className='myprofile-main-bg'>
                <Header />
                <MyProfileDetailPost myProfileListData={myProfileListData} />
                <ul className="mp-unordered-list">
                    {myProfileStoriesList.map(EachStory => (
                        <MyProfileStory EachStory={EachStory} key={EachStory.id} />
                    ))}
                </ul>
                <div className="posts-grid-div">
                    <BsGrid3X3 />
                    <p className="posts-grid">Posts</p>
                </div>
                <ul className="mp-unordered-list-posts-sm-lg">
                    {myProfilePostsList.map(EachUserPost => (
                        <MyProfileUserPost
                            EachUserPost={EachUserPost}
                            key={EachUserPost.id}
                            postsLength={postsLength}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
export default MyProfile
