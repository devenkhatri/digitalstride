import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from 'gatsby'
import HeroSection from '../components/HeroSection'
import Offerings from '../components/Offerings'
import TechStack from '../components/TechStack'
import CallAction from '../components/CallAction'

const IndexPage = (props) => {
  const { data: { contentfulHomepage, allContentfulServices } } = props;
  
  const heroImage = (contentfulHomepage && contentfulHomepage.heroImage) || "https://shuffle.dev/metis-assets/illustrations/working-from-airport.png";
  const heroText = (contentfulHomepage && contentfulHomepage.heroText) || `Creation of awesome site's work is in progress...`
  const callAction = {
    heading: contentfulHomepage.callActionHeading,
    title: contentfulHomepage.callActionTitle,
    subtitle: contentfulHomepage.callActionSubtitle,
    buttontext: contentfulHomepage.callActionButtonText,
  };
  const allServices = [];
  if(allContentfulServices){
    allContentfulServices.edges.map(({node})=>{
      allServices.push({
        title: node.title,
        image: node.serviceImage,
        url:`/service/${node.slug}`,
        text: node.childContentfulServicesExcerptTextNode.childMarkdownRemark.html
      });
    });
  }
  const logos = [
    {title: "AEM", image: "/images/worklogos/aem.png", url:"/"},
    {title: "WooCommerce", image: "/images/worklogos/woocommerce.png", url:"/"},
    {title: "Magento", image: "/images/worklogos/magento.png", url:"/"},
    {title: "Wordpress", image: "/images/worklogos/wordpress.png", url:"/"},
    {title: "Drupal", image: "/images/worklogos/drupal.png", url:"/"},
    {title: "ReactJS", image: "/images/worklogos/reactjs.png", url:"/"},
    {title: "AngularJS", image: "/images/worklogos/angularjs.png", url:"/"},
    {title: "NodeJS", image: "/images/worklogos/nodejs.png", url:"/"},
    {title: "GatsbyJS", image: "/images/worklogos/gatsbyjs.png", url:"/"},
    {title: "GraphQL", image: "/images/worklogos/graphql.png", url:"/"},
    {title: "Netlify", image: "/images/worklogos/netlify.png", url:"/"},
    {title: "Contentful", image: "/images/worklogos/contentful.png", url:"/"},
  ];
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection className={'is-small is-bold is-light'} content={heroText} image={heroImage} />

      <section className='section section--gradient'>
        <div className='container'>
          <Offerings gridItems={allServices} />
          <TechStack logos={logos} />  
          <CallAction content={callAction} />        
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query HomePageTemplate {
    contentfulHomepage {
      heroText {
        raw
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      callActionHeading
      callActionTitle
      callActionSubtitle
      callActionButtonText
    }
    allContentfulServices {
      edges {
        node {
          title
          slug
          childContentfulServicesExcerptTextNode {
            childMarkdownRemark {
              html
            }
          }
          serviceImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
