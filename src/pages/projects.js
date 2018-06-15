import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import { IMAGES } from '../constants'

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
                    <h4>Also check out <a href="https://www.techlis.com/projects">Techlis' projects</a></h4>
                </section>
                <section><a href="..">Go Back</a></section>
            </div>
        )
    }
}

export default Projects