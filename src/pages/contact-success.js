import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from '../components/HeroSection'

const ContactSuccess = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title={`Thanks You !!!`} content={``} className={'is-small is-bold is-primary has-text-centered'} />
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-spaced">Thank you for contacting us</h1>
          <h2 className="subtitle">We have received your details successfully. We would be soon reaching back to you.</h2>
          <div className="buttons is-centered"><a className="control button is-primary" href="/">Back to homepage</a></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactSuccess
