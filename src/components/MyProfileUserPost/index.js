import { Component } from 'react'
import './index.css'

class MyProfileUserPost extends Component {
    render() {
        const { EachUserPost, postsLength } = this.props
        const { image } = EachUserPost
        let PostsOutput
        if (postsLength < 1) {
            PostsOutput = (
                <div className="no-posts-yet-div">
                    <img src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680842060/Group_7355_cju4q6.png" />
                    <p>No Posts Yet</p>
                </div>
            )
        } else {
            PostsOutput = (
                <div>
                    <img src={image} className="mp-post-image-large" />
                </div>
            )
        }
        return <>{PostsOutput}</>
    }
}
export default MyProfileUserPost
