import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <button className="navbar-toggler sidebar-toggler" type="button" data-toggle="sidebar-show">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="navbar-brand" to="/">
                RR IKP ADMIN
            </Link>
        </div>
    )
}

export default Navbar
