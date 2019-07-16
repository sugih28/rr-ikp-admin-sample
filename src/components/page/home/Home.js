import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Home extends Component {
    render() {
        const username = (this.props.auth) ? this.props.auth.name : null

        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome {username}!</h1>
                <p className="lead">This is an Admin Template of React Redux By IKP, check the dependencies for more information about Third Party Package Using on this Template.</p>
                <hr className="my-4" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, minima nam tempore quo quod in nesciunt labore? Mollitia quia tenetur, similique vero minus veniam impedit temporibus molestiae eum accusamus. Hic?.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="https://github.com/sugih28/rr-ikp-admin-sample" role="button">Learn more</a>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps)(Home)
