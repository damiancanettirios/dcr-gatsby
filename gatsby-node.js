exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      experiments: allContentfulExperiments {
        edges {
          node {
            title
            slug
          }
        }
      }
      posts: allContentfulBlogPosts {
        nodes {
          slug
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const experiments = result.data.experiments.edges
  const experimentTemplate = require.resolve(
    `./src/templates/experiment-post.js`
  )
  experiments.forEach(({ node }) => {
    createPage({
      path: `/experiments/${node.slug}/`,
      component: experimentTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  const posts = result.data.posts.nodes
  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: blogPostTemplate,
      context: {
        slug: post.slug,
      },
    })
  })
}
