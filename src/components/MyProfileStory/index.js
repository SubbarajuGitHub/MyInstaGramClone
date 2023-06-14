import { Component } from 'react'
import './index.css'

class MyProfileStory extends Component {
    render() {
        const { EachStory } = this.props
        const { image } = EachStory
        return (
            <div className="mp-story-main-div">
                <div className="mp-story-div-large">
                    <img src={image} className="mp-story-image-large" />
                </div>
            </div>
        )
    }
}
export default MyProfileStory
