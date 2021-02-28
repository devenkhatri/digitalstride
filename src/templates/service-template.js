import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Img from 'gatsby-image'

const ServiceTemplate = (props) => {
  const { data: { contentfulServices: { title, excerpt, shortDescription, serviceImage, description } } } = props
  return (
    <Layout>
      <SEO title={title} />
      <HeroSection title={title} content={shortDescription && shortDescription.childMarkdownRemark.html} className={'is-small is-bold is-primary'} image={serviceImage}/>
      <section className="section">
        <div className="container py-4">
          <div className="columns">
            <div className={`column`}>              
              <HTMLContent content={description && description.childMarkdownRemark.html} className={"has-text-justified"} />
            </div>            
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServiceTemplate

export const serviceTemplateQuery = graphql`
  query ServiceTemplate($slug: String!) {
    contentfulServices(slug: {eq: $slug}) {
      title
      slug
      serviceImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      excerpt {
        childMarkdownRemark {
          html
        }
      }
      shortDescription {
        childMarkdownRemark {
          html
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
