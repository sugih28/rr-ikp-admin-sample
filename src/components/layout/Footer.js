import React from 'react'

const Footer = () => {
    let d = new Date()
    const year = d.getFullYear()

    return (
        <div className="footer">
            Copyright &copy; {year} - IKP Production 
        </div>
    )
}

export default Footer
