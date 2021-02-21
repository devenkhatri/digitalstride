import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from '../components/HeroSection'
import GatsbyImage from '../components/GatsbyImage'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeroSection title={`404: Not Found`} content={`You just hit a route that doesn't exist... the sadness.`} className={'is-small is-danger'} />
    
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-7">
            <h1 className="title is-1">404</h1>
            <p className="subtitle is-3">Page not found</p>
            <div style={{ maxWidth: `40%`, margin: `auto` }}>
              <GatsbyImage />
            </div>
          </div>
        </div>
        <a className="button is-danger" href="/">Back to homepage</a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
