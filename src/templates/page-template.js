import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'

const PageTemplate = (props) => {
  const { data: { contentfulPages: { title, slug, body } } } = props
  
  return (
    <Layout>
      <SEO title={title}/>
      <HeroSection title={title} className={'is-small is-bold is-info'} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={body.raw}
      />
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
