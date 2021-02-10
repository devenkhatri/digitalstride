const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type siteSearchIndex implements Node {
        index: String
      }
    `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page-template.js')
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
      })
    )
  })
}