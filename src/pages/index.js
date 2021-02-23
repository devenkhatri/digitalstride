import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from 'gatsby'
import HeroSection from '../components/HeroSection'
import Offerings from '../components/Offerings'

const IndexPage = (props) => {
  const { data: { contentfulHomepage, allContentfulServices } } = props;
  
  const heroImage = (contentfulHomepage && contentfulHomepage.heroImage) || "https://shuffle.dev/metis-assets/illustrations/working-from-airport.png";
  const heroText = (contentfulHomepage && contentfulHomepage.heroText) || `Creation of awesome site's work is in progress...`
  const allServices = [];
  if(allContentfulServices){
    allContentfulServices.edges.map(({node})=>{
      allServices.push({
        title: node.title,
        image: node.serviceImage,
        url:`/service/${node.slug}`,
        text: node.childContentfulServicesExcerptTextNode.childMarkdownRemark.rawMarkdownBody
      });
    });
  }
  // const offerings = [
  //   {title: "one", image: "https://shuffle.dev/metis-assets/illustrations/work-tv.png", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "two", image: "https://shuffle.dev/metis-assets/illustrations/people-watching.png", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "three", image: "https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=ffd1b2", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "four", image: "https://shuffle.dev/metis-assets/illustrations/financial-report.png", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  // ];
  // const offerings2 = [
  //   {title: "five", image: "https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=11ffb2", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "six", image: "https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=11d1ff", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "seven", image: "https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=ffd1b2", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  //   {title: "eight", image: "https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=44f1b4", url:"/", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pretium lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum mattis pellentesque id. Velit egestas dui id ornare."},
  // ];
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection className={'is-small is-bold is-light'} content={heroText} image={heroImage} />

      <section className='section section--gradient'>
        <div className='container'>
          <h2 className="title has-text-centered mb-6">Some of our awesome features</h2>
          <Offerings gridItems={allServices}/>
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
    }
    allContentfulServices {
      edges {
        node {
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
        }
      }
    }
  }
`
