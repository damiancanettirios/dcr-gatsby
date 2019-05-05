const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const experimentPost = path.resolve('./src/templates/experiment-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulExperiments {
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

        const posts = result.data.allContentfulExperiments.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/experiments/${post.node.slug}/`,
            component: experimentPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
