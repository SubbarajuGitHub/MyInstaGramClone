import { Component } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import Cookies from 'js-cookie'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserRequestedPost } from '../ReducerFunction';


import './index.css'

class Header extends Component {
    state = { showHamBurger: false, searchElement: false }

    getUserRequestedPostDeatils = event => {
        const searchValue = event.target.value;
        this.props.setUserRequestedPost(searchValue);
    };


    onClickLogout = () => {
        const { history } = this.props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    getHamburgerOptions = () => {
        this.setState(prevState => ({
            showHamBurger: !prevState.showHamBurger,
            searchElement: false,
        }))
    }

    getSearchElement = () => {
        this.setState(prevState => ({
            searchElement: !prevState.searchElement,
            showHamBurger: false,
        }))
    }

    RemoveHamgerOptions = () => {
        this.setState({ showHamBurger: false })
    }

    renderHamBurgerOptions = () => {
        const { showHamBurger } = this.state
        return (
            <div className="hamburger-options">
                <Link to="/" className="link-items">
                    <li className="option-large buttons">Home</li>
                </Link>
                <li className="option-large buttons" onClick={this.getSearchElement}>
                    Search
                </li>
                <Link to="/my-profile" className="link-items">
                    <li className="option-large">Profile</li>
                </Link>
                <button
                    className="logout-button"
                    type="button"
                    onClick={this.onClickLogout}
                >
                    Logout
                </button>
                <MdCancel onClick={this.RemoveHamgerOptions} className="cancel-icon" />
            </div>
        )
    }

    renderSearchInput = () => {
        const { searchElement } = this.state
        return (
            <div className="search-div-small">
                <input
                    type="search"
                    placeholder="Search Caption"
                    onChange={this.getUserRequestedPostDeatils}
                />
                <AiOutlineSearch size="45" className="small-search-input-element" />
            </div>
        )
    }

    render() {
        const { showHamBurger, searchElement, userRequetsedPost } = this.state
        const { inputValues } = this.props
        const blue = searchElement ? 'special' : null
        return (
            <>
                <div className="header-large">
                    <div className="header-main-div-large">
                        <div className="header-logo-div">
                            <img
                                src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680665490/Group_solkcd.png"
                                className="home-logo-large"
                            />
                            <p className="insta-share">Insta Share</p>
                        </div>
                        <div className="header-options-div">
                            <div className="search-div-large">
                                <input
                                    type="search"
                                    className="search-input"
                                    placeholder="Search Caption"
                                    onChange={this.getUserRequestedPostDeatils}
                                />
                                <AiOutlineSearch className="search-icon" />
                            </div>
                            <Link to="/" className="link-items">
                                <li className="option-large buttons">Home</li>
                            </Link>
                            <Link to="/my-profile" className="link-items">
                                <li className="option-large">Profile</li>
                            </Link>
                            <button
                                className="logout-button"
                                type="button"
                                onClick={this.onClickLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-small">
                    <div className="instagram-logo-div-small">
                        <div className="small-first-div">
                            <img
                                src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680665490/Group_solkcd.png"
                                className="home-logo-large"
                            />
                            <p className="insta-share">Insta Share</p>
                        </div>
                        <div>
                            <GiHamburgerMenu
                                onClick={this.getHamburgerOptions}
                                className="hamburger-icon"
                            />
                        </div>
                    </div>
                    <div>
                        {showHamBurger ? this.renderHamBurgerOptions() : null}
                        {searchElement ? this.renderSearchInput() : null}
                    </div>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = {
    setUserRequestedPost,
}

export default connect(null, mapDispatchToProps)(withRouter(Header))
