import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from '../components/HeroSection'
import GatsbyImage from '../components/GatsbyImage'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeroSection title={`404: Not Found`} content={`You just hit a route that doesn't exist... the sadness.`} className={'is-small is-danger'} />
    <div style={{ maxWidth: `25%`, margin: `auto` }}>
      <GatsbyImage />      
    </div>
  </Layout>
)

export default NotFoundPage
