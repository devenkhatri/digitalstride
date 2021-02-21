import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from '../components/HeroSection'

const ContactSuccess = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title={`Thanks You !!!`} content={``} className={'is-small is-bold is-primary has-text-centered'} />
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-spaced">Thank you for contacting us</h1>
          <h2 class="subtitle">We have received your details successfully. We would be soon reaching back to you.</h2>
          <div class="buttons is-centered"><a class="control button is-primary" href="/">Back to homepage</a></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactSuccess
