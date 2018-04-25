import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    {/* <a href="#" className="image avatar"><img src={avatar} alt="" /></a> */}
                    <h1>Hello! I am <strong>JONNY NGUYEN</strong><br/>A Web & Mobile App Developer<br/>AEM Full-Stack Developer</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
