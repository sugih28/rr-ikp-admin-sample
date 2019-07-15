import React from 'react'

const Footer = () => {
    let d = new Date()
    const year = d.getFullYear()

    return (
        <div className="footer">
            Copyright &copy; {year}
        </div>
    )
}

export default Footer
