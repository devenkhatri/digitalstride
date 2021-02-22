const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type siteSearchIndex1 implements Node {
        index: String
      }
    `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page-template.js')
    const serviceTemplate = path.resolve('./src/templates/service-template.js')
    resolve(
      graphql(
        `
          {
            allContentfulPages {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulServices {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulPages.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: pageTemplate,
            context: {
              slug: page.node.slug
            },
          })
        })

        const services = result.data.allContentfulServices.edges
        services.forEach((service, index) => {
          createPage({
            path: `/service/${service.node.slug}/`,
            component: serviceTemplate,
            context: {
              slug: service.node.slug
            },
          })
        })

      })
    )
  })
}