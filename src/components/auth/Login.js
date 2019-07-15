import React, { Component } from 'react'
import admin from '../../assets/images/profileA.png'
import SimpleReactValidator from 'simple-react-validator'
import {connect} from 'react-redux'
import {login} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({autoForceUpdate: this})
    }
    

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })   
    }

    submitHandle = (e) => {
        e.preventDefault()

        if (this.validator.allValid()) {
            this.props.login(this.state)  
            // this.props.history.push('/')
        } else {
            this.validator.showMessages()
        }
    }

    render() {
        if (this.props.auth) {
            return (
                <Redirect to="/" />
            )
        }

        const errMessage = (this.props.loginErr) ? (
            <center className="alert alert-danger">{this.props.message}</center>
        ) : null

        return (
            <div className="row">
                <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
                <br/>
                    <div className="card">
                        <div className="card-body">
                            <center>
                                <h1>LOGIN</h1>
                                <img src={admin} className="img-avatar" alt="avatar"/>
                            </center>

                            <form onSubmit={this.submitHandle}>
                                <label htmlFor="username">Username</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="email" id="username" placeholder="Username" onChange={this.changeHandle}/>
                                    {this.validator.message('username', this.state.email, 'required')}
                                </div>

                                <label htmlFor="password">Password</label>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.changeHandle}/>
                                    {this.validator.message('password', this.state.password, 'required|min:8|max:16')}
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary col-md-12 col-sm-12 col-xs-12" type="submit">LOGIN</button>
                                </div>

                                {errMessage}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        loginErr: state.auth.loginErr,
        message: state.auth.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
