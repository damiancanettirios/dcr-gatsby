import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import Hero from '../components/hero'
import EachExperimentCol from '../components/each-experiment-col'

const styles = theme => ({
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
})

class ExperimentPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const title = 'Experiments | ' + siteTitle
    const experiments = get(this, 'props.data.experiments.edges')
    const logo = get(this, 'props.data.logo')
    const pageContent = get(this, 'props.data.pageContent')
    const { classes } = this.props

    return (
      <Layout logo={logo}>
        <Helmet title={title} />
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
}

export default withStyles(styles)(ExperimentPage)

export const pageQuery = graphql`
  query ExperimentQuery {
    site {
      siteMetadata {
        title
      }
    }
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
    logo: contentfulLogo {
      id
      title
      image {
        file {
          url
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
