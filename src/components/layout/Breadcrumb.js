import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = ({pagetree}) => {
    const listBread = (pagetree.length) ? pagetree.map((page, index) => {
        if (pagetree.length - 1 === index) {
            return (
                <li className="breadcrumb-item active" key={index} aria-current="page">{page.title}</li>
            )    
        } else {
            return (
                <li className="breadcrumb-item" key={index} aria-current="page"><Link to={page.url}>{page.title}</Link></li>
            )   
        }
    }) : null

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {listBread}
            </ol>
        </nav>
    )
}

export default Breadcrumb
