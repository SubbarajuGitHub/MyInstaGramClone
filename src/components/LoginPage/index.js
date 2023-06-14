import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './index.css'

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: 'Username or Password is Invalid',
    }

    getUserName = event => {
        this.setState({ username: event.target.value })
    }

    getUserPassword = event => {
        this.setState({ password: event.target.value })
    }

    onSubmitSuccess = jwtToken => {
        const { history } = this.props

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        })
        history.replace('/')
    }

    onSubmitFailure = () => {
        this.setState({ showSubmitError: true })
    }

    submitLoginForm = async event => {
        event.preventDefault()
        const { username, password } = this.state
        const userDetails = { username, password }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
        } else {
            this.onSubmitFailure()
        }
    }

    render() {
        const { username, password, errorMsg, showSubmitError } = this.state
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        return (
            <div className="login-form-container">
                <div>
                    <img
                        src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680664407/OBJECTS_1_secs0y.png"
                        className="login-image-lg"
                    />
                </div>
                <div className="form-container">
                    <img
                        src="https://res.cloudinary.com/dblt0lmvx/image/upload/v1680665490/Group_solkcd.png"
                        className="login-group-logo"
                    />
                    <p className="instragram-heading">Insta Share</p>
                    <form onSubmit={this.submitLoginForm}>
                        <label htmlFor="username" className="username-label">
                            USERNAME
                        </label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            onChange={this.getUserName}
                            className="username-input"
                        />
                        <br />
                        <label htmlFor="password" className="password-label">
                            PASSWORD
                        </label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            onChange={this.getUserPassword}
                            className="password-input"
                        />
                        <br />
                        <button type="submit" className="submit-button">
                            Login
                        </button>
                        {showSubmitError ? <p className="errorMsg">{errorMsg}</p> : null}
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginPage
