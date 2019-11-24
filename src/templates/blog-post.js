import React from "react"
import { graphql, Link } from "gatsby"
import YouTube from "react-youtube"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogLayout from "../components/blog-layout"

const useStyles = makeStyles({
  body: {
    color: `#C6C7C4`,
    "& a": {
      color: `#20BF55`,
      "&:hover": {
        color: `#bf5520`,
      },
    },
  },
})

const BlogPost = ({ data: { post } }) => {
  const matches = useMediaQuery("(min-width:600px)")
  const classes = useStyles()
  const opts = {
    height: matches ? "360" : "180",
    width: matches ? "640" : "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: "https://www.damiancanettirios.com/",
    },
  }

  return (
    <Layout>
      <SEO title={post.title} />
      <BlogLayout>
        <div
          style={{
            maxWidth: 680,
            margin: `0 auto`,
            fontSize: `1.25rem`,
            paddingTop: 50,
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            align="center"
            style={{ fontWeight: `normal` }}
          >
            {post.title}
          </Typography>
          <div style={{ paddingTop: 60, textAlign: `center` }}>
            <YouTube videoId={post.youTubeLink} opts={opts} />
          </div>
          <div className={classes.body}>
            <MDXRenderer>{post.mdxPost.childMdx.body}</MDXRenderer>
            <div style={{ marginTop: 20 }}>
              <Link to="/blog">&larr; back to all posts</Link>
            </div>
          </div>
        </div>
      </BlogLayout>
    </Layout>
  )
}

export default BlogPost

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
