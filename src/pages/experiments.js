import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import Hero from '../components/hero'
import EachExperimentCol from '../components/each-experiment-col'

const useStyles = makeStyles(theme => ({
  experimentList: {
    width: `80%`,
    color: `#C6C7C4`,
    margin: `0 auto`,
  },
  [theme.breakpoints.down('sm')]: {
    experimentList: {
      width: `90%`,
      color: `#C6C7C4`,
      margin: `0 auto`,
    },
  },
}))

const ExperimentPage = ({ data }) => {
  const experiments = data.experiments.edges
  const pageContent = data.pageContent
  const classes = useStyles()

  return (
    <Layout pageTitle="Experiments">
      <Hero pageContent={pageContent} />
      <div className={classes.experimentList}>
        <Typography
          variant="h3"
          color="inherit"
          style={{ marginTop: 30, marginBottom: 10 }}
        >
          {pageContent.secondTitle}
        </Typography>
        <hr style={{ color: `#C6C7C4` }} />
        <Grid container direction="column">
          {experiments.map(({ node }) => (
            <EachExperimentCol key={node.id} node={node} />
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
