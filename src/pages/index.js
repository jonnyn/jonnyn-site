import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
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
                        <ul className="actions">
                            <li><a href="/blogs" className="button">My Blogs</a></li>
                        </ul>
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
                        <Contact />
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