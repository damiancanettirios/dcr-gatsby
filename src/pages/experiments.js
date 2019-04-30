import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import EachExperiment from '../components/each-experiment'

const styles = theme => ({
  experimentHero: {
    color: `#C6C7C4`,
    margin: `0 auto`,
    maxWidth: `80%`,
    padding: `60px 0px 60px 0px`,
  },
  experimentList: {
    maxWidth: `80%`,
    color: `#C6C7C4`,
    margin: `0 auto`,
  },
  [theme.breakpoints.down('sm')]: {
    experimentList: {
      maxWidth: `80%`,
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
    const logo = get(this, 'props.data.contentfulLogo')
    const { classes } = this.props

    return (
      <Layout logo={logo}>
        <Helmet title={title} />
        <div className={classes.experimentHero}>
          <Typography variant="h3" color="inherit" align="center">
            Personal growth project
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            style={{ marginTop: 20 }}
          >
            No quite mad scientist level but experiments nonetheless to feed my
            humblebrag
          </Typography>
        </div>
        <div className={classes.experimentList}>
          <Typography
            variant="h3"
            color="inherit"
            style={{ marginTop: 30, marginBottom: 10 }}
          >
            Experiments
          </Typography>
          <hr style={{ color: `#C6C7C4` }} />
          <Grid container spacing={8} direction="row">
            {experiments.map(({ node }) => (
              <EachExperiment key={node.id} node={node} />
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
      sort: { fields: sequence, order: ASC }
    ) {
      edges {
        node {
          id
          title
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
    contentfulLogo {
      id
      title
      image {
        file {
          url
        }
      }
    }
  }
`
