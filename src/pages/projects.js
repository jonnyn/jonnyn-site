import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import { IMAGES } from '../constants'
import AppStoreLink from '../components/AppStoreLink';

class Projects extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="main">
                <section><a href="..">Go Back</a></section>
                <section>
                    <h2>Past Projects</h2>
                    <Gallery images={IMAGES.PAST_PROJECTS_GALLERY.map(({ id, src, thumbnail, caption, description }) => ({
                        src,
                        thumbnail,
                        caption,
                        description
                    }))} />
                    <p>Check out my App Stores</p>
                        <AppStoreLink 
                            appleLink="https://itunes.apple.com/us/developer/techlis-systems-inc/id987066377?mt=8"
                            googleLink="https://play.google.com/store/apps/developer?id=Techlis+Systems+Inc."
                            otherLink="https://play.google.com/store/apps/developer?id=BinuApp" />
                    <p>Also check out <a href="https://www.techlis.com/projects">Techlis' projects</a></p>
                </section>
                <section><a href="..">Go Back</a></section>
            </div>
        )
    }
}

export default Projects