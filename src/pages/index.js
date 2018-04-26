import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import { IMAGES } from '../constants'

class HomeIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Professional</h2>
                        </header>
                        <p>
                            HTML, Javascript (React, AngularJS, JQuery, HandleBars, Electron, WinJS)<br/>
                            CSS (SCSS, LESS, bootstrap, Font-Awesome)<br/>
                            IOS & Android Apps via React-Native, Android SDK, Swift<br/>
                            Java (Native Android App & Servlet), SQL, C#<br/>
                            Adobe Experience Management (AEM)<br/>
                            Visual Studio, XCode, Android Studio, Eclipse, VS Code, Git, SVN
                        </p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <Gallery images={IMAGES.RECENT_WORK_GALLERY.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="/projects" className="button">More Past Projects</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                {/* <form name="contact" action="https://formspree.io/jonnyn@live.com" method="POST" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div data-netlify-recaptcha></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul> */}
                                <form name="contact" method="POST" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div data-netlify-recaptcha></div>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Coquitlam<br/>British Columbia, Canada<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:jonnyn@live.com">jonnyn@live.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`