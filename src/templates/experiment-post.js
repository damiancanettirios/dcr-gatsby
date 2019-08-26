import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'

const ExperimentPost = ({ data }) => {
  const post = data.experiment

  return (
    <Layout pageTitle={`${post.title}`}>
      <div>
        <Img
          alt={post.title}
          fluid={post.heroImage.fluid}
          style={{
            width: `80%`,
            margin: `0 auto`,
            border: `1px solid #C6C7C4`,
          }}
        />
      </div>
      <div
        style={{
          color: `white`,
          width: `80%`,
          margin: `0 auto`,
          paddingTop: 50,
        }}
      >
        <Typography variant="h3" color="inherit">
          {post.title}
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          style={{ fontWeight: `normal`, marginTop: 20 }}
        >
          {post.shortDescription}
        </Typography>
      </div>
    </Layout>
  )
}

export default ExperimentPost

export const pageQuery = graphql`
  query ExperimentPostBySlug($slug: String!) {
    experiment: contentfulExperiments(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:eeeeee") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      shortDescription
    }
  }
`
