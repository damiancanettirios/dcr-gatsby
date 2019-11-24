import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperimentPost = ({ data: { experiment } }) => {
  return (
    <Layout>
      <SEO title={experiment.title} />
      <div>
        <Img
          alt={experiment.title}
          fluid={experiment.heroImage.fluid}
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
        <Typography variant="h3" color="primary">
          {experiment.title}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ fontWeight: `normal`, marginTop: 20 }}
        >
          {experiment.shortDescription}
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
