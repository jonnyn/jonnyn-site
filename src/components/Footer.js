import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/vieboi" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/jonnyn/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://ca.linkedin.com/in/jonny-nguyen" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:jonnyn@live.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Jonny Nguyen</li><li><a href="https://www.techlis.com">Founder of Techlis</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
