import { Component } from 'react'

import './index.css'

class NotFound extends Component {
    render() {
        return (
            <div className="page-found">
                <img
                    src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680840410/Group_2_vvh15d.png"
                    className="not-found-image"
                />
                <h1 className="not-found-heading">Page Not Found</h1>
                <p className="not-found-paragraph">
                    we are sorry,the page you requested could not be found.Please go back
                    to the homepage.
                </p>
                <button className="not-found-button ">Home Page</button>
            </div>
        )
    }
}
export default NotFound
