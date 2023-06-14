import { Component } from 'react'
import Header from '../Header'
import Posts from '../Posts'
import ReactSlick from '../ReactSlick'

class Home extends Component {
    render() {
        return (
            <>
                <ReactSlick />
                <Header />
                <Posts />

            </>
        )
    }
}
export default Home
