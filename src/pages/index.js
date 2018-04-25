import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Video Streaming App', description: ''},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Quiz Multiple Choice App', description: ''},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Franklin Covey - The Leader In Me', description: 'One of three main developers in Agile team of 12. Responsible for building reusable AEM components and templates, building complex community page and post builder, as well as overall stability and performance of the site. Developed using AEM 6.1, Java, Apache Sling Servlets, Sightly, JS, JQuery, Handlebars, Bootstrap, and SCSS'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Epix', description: 'Developer on a team of two to create an Android app to act as a front end for ' + 
    'the Epix collection of movies and TV shows. The app allowed the user to browse, favourite, and watch movies and TV shows on their android device. ' +
    'It was built using the Android SDK ( in Java ) with Eclipse and Android Studio.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Shutterfly - ThisLife', description: 'Software developer in an Agile team of over 20 members from both Ensemble and Shutterfly developing a native Android mobile app that helped user to manage and share photos, videos, albums, moments. Responsible for building new features in multiple Agile sprints as well as bug fixes.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Proteus - Helius', description: 'Software developer responsible for implementation of add-on features of Android medical app and a web administration tools; ensuring cross browser compatibility for the web, partner branding, maintaining and bug fixing. The app presents medical data captured from an adhesive patch that monitors a marker embedded in an ingestible placebo. The placebo is ingested along with doses of a medicine so that the time of day can be associated with the intake. The patch can also record other medical data which can then be shared, through the app, with other parties.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
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
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">More Past Projects</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="POST" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div data-netlify-recaptcha></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
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