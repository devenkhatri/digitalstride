import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import { ContentfulHTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Img from 'gatsby-image'

const ServiceTemplate = (props) => {
  const { data: { contentfulServices: { title, childContentfulServicesExcerptTextNode, serviceImage, description } } } = props
  return (
    <Layout>
      <SEO title={title} />
      <HeroSection title={title} content={childContentfulServicesExcerptTextNode.childMarkdownRemark.rawMarkdownBody} className={'is-small is-bold is-primary'} image={serviceImage.fluid.src}/>
      <section className="section">
        <div className="container py-4">
          <div className="columns">
            <div className={`column`}>
              {/* <Img fluid={serviceImage.fluid} /> */}
              {description &&
                <ContentfulHTMLContent content={JSON.parse(description.raw)} className={"has-text-justified"} />
              }
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
      childContentfulServicesExcerptTextNode {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      serviceImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        raw
      }
    }
  }
`
