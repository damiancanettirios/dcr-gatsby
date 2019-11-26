import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TextHero from '../components/text-hero'
import EachExperiment from '../components/each-experiment'

const useStyles = makeStyles({
  experimentList: {
    width: `85%`,
    color: `#C6C7C4`,
    margin: `0 auto`,
  },
})

const ExperimentPage = ({ data }) => {
  const experiments = data.experiments.edges
  const pageContent = data.pageContent
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Experiments" />
      <TextHero pageContent={pageContent} />
      <div className={classes.experimentList}>
        <Typography
          variant="h3"
          color="inherit"
          style={{ marginTop: 30, marginBottom: 10 }}
        >
          Websites
        </Typography>
        <hr style={{ color: `#C6C7C4` }} />
        <Grid container direction="row">
          {experiments.map(({ node }) => (
            <Grid item key={node.id} md={4} sm={12} style={{ marginTop: 10 }}>
              <EachExperiment node={node} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default ExperimentPage

export const pageQuery = graphql`
  query ExperimentQuery {
    experiments: allContentfulExperiments(
      sort: { fields: sequence, order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          shortDescription
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
          tags
        }
      }
    }
    pageContent: contentfulPageContent(page: { eq: "Experiments" }) {
      title
      description {
        description
      }
      secondTitle
    }
  }
`
