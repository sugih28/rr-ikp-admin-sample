import React from 'react'
import {NavLink} from 'react-router-dom'
import admin from '../../assets/images/profileA.png'

const Sidebar = ({auth, logout}) => {
    const logoutHandle = () => {
        logout()
    }
    
    const authSidebar = (auth) ? (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={admin} className="img-avatar" alt="profile"/>
                <div>
                    <strong>{auth.name}</strong>
                </div>

                <div className="text-muted">
                    <small>React Redux IKP Admin</small>
                </div>

                <div className="btn-group">
                    <button className="btn btn-link" type="button" onClick={logoutHandle}><i className="cui-account-logout"></i></button>
                    <button className="btn btn-link" type="button"><i className="cui-user"></i></button>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-title">Page</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            <i className="nav-icon cui-home"></i> Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-title">Authentication</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            <i className="nav-icon cui-user"></i> Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">
                            <i className="nav-icon cui-people"></i> Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

    return (
        <div>
            {authSidebar}
        </div>
    )
}

export default Sidebar
