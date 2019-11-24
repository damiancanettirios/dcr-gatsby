import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allContentfulBlogPosts(
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          id
          slug
          title
          description {
            description
          }
          heroImage {
            fluid(quality: 99) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data.posts.nodes.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.description.description,
    image: post.heroImage,
  }))
}

export default usePosts
