import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import { ContentfulHTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'

const PageTemplate = (props) => {
  const { data: { contentfulPages: { title, body } } } = props
  console.log(JSON.parse(body.raw))
  return (
    <Layout>
      <SEO title={title} />
      <HeroSection title={title} className={'is-small is-bold is-primary'} />
      <div className="container">
        <ContentfulHTMLContent content={JSON.parse(body.raw)} className={"section"} />
      </div>
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
