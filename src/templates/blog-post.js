import React from 'react'
import { graphql, Link } from 'gatsby'
import YouTube from 'react-youtube'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Typography from '@material-ui/core/Typography'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import Layout from '../components/layout'
import BlogLayout from '../components/blog-layout'

const BlogPost = ({ data: { post }, width }) => {
  const opts = {
    height: isWidthUp('md', width) ? '360' : '180',
    width: isWidthUp('md', width) ? '640' : '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'https://www.damiancanettirios.com/',
    },
  }

  return (
    <Layout pageTitle={`${post.title} | Blog`}>
      <BlogLayout>
        <div
          style={{
            color: `#C6C7C4`,
            maxWidth: 680,
            margin: `0 auto`,
            fontSize: `1.25rem`,
            paddingTop: 50,
          }}
        >
          <Typography
            variant="h3"
            color="inherit"
            style={{ fontWeight: `normal` }}
          >
            {post.title}
          </Typography>
          <div style={{ paddingTop: 60, textAlign: `center` }}>
            <YouTube videoId={post.youTubeLink} opts={opts} />
          </div>
          <MDXRenderer>{post.mdxPost.childMdx.body}</MDXRenderer>
          <div style={{ marginTop: 20 }}>
            <Link to="/blog">&larr; back to all posts</Link>
          </div>
        </div>
      </BlogLayout>
    </Layout>
  )
}

export default withWidth()(BlogPost)

export const pageQuery = graphql`
  query($slug: String) {
    post: contentfulBlogPosts(slug: { eq: $slug }) {
      title
      mdxPost: childContentfulBlogPostsBodyTextNode {
        childMdx {
          body
        }
      }
      youTubeLink
    }
  }
`
