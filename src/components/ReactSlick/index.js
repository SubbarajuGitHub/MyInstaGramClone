import { Component } from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'


import 'slick-carousel/slick/slick.css';


import './index.css'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
}

const apiStatusConstants = {
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
}

class ReactSlick extends Component {
    state = { storiesList: [], apiStatus: apiStatusConstants.inProgress }

    componentDidMount() {
        this.getUserStories()
    }

    /* react slick loader */

    renderLoadingView = () => (
        <div className="react-slicker-loader-container">
            <h1>Loading....</h1>
        </div>
    )

    /* react slicker loader */

    renderSuccessSlicker = () => (
        <div className="main-container">
            <div className="slick-container">{this.renderSlider()}</div>
        </div>
    )

    getUserStories = async () => {
        const { storiesList } = this.state
        const url = 'https://apis.ccbp.in/insta-share/stories'
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            const usersStories = data.users_stories
            const userStoriesList = usersStories.map(Each => ({
                userId: Each.user_id,
                userName: Each.user_name,
                storyUrl: Each.story_url,
            }))
            this.setState({
                storiesList: userStoriesList,
                apiStatus: apiStatusConstants.success,
            })
        }
    }

    renderSlider = () => {
        const { storiesList } = this.state
        return (
            <Slider {...settings}>
                {storiesList.map(eachLogo => {
                    const { storyUrl, userName, userId } = eachLogo
                    return (
                        <div className="slick-item" key={userId}>
                            <img className="logo-image" src={storyUrl} alt="company logo" />
                            <p className="username">{userName}</p>
                        </div>
                    )
                })}
            </Slider>
        )
    }

    renderReactAllSlicks = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderSuccessSlicker()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            default:
                return null
        }
    }

    render() {
        return <div>{this.renderReactAllSlicks()}</div>
    }
}

export default ReactSlick
