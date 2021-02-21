import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import { ContentfulHTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'

const PageTemplate = (props) => {
  const { data: { contentfulPages: { title, slug, body } } } = props
  console.log(JSON.parse(body.raw))
  console.log(slug, slug.indexOf("contact"))
  const isContactPage = slug && slug.indexOf("contact")>=0;
  return (
    <Layout>
      <SEO title={title} />
      <HeroSection title={title} className={'is-small is-bold is-primary'} />
      <section className="section">
        <div className="container py-4">
          <div className="columns">
            <div className={`column ${isContactPage?"is-6":""}`}>
              <ContentfulHTMLContent content={JSON.parse(body.raw)} className={"has-text-justified"} />
            </div>
            {isContactPage &&
              <div className="column is-5 is-offset-1">
                <ContactForm />
              </div>
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PageTemplate

export const pageTemplateQuery = graphql`
  query PageTemplate($slug: String!) {
    contentfulPages(slug: {eq: $slug}) {
      title
      slug
      body {
        raw
      }
    }
  }
`
