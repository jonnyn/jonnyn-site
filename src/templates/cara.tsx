import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import useViewport from "../hooks/useViewport"

const Cara = () => {
  const { width } = useViewport()
  const breakpoint = 600

  return width < breakpoint ? (
    <Layout>
      <Parallax pages={8}>
        <Hero offset={0} factor={1} />
        <Projects offset={2} factor={3} />
        <About offset={6} factor={1} />
        <Contact offset={7} factor={1} />
      </Parallax>
    </Layout>
  ) : (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Cara
