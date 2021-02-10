import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from '../components/HeroSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title={`Hi People !!!`} content={`Work in progress...`} className={'is-medium is-bold is-primary'} />
    
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-0'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>Digital Stride is coming soon</h3>
                  <p>Welcome to our new site.</p>
                  <p>We are building something great.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
