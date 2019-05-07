import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import FullCV from '../components/full-cv'
import Hero from '../components/hero'

class CVPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const cv = get(this, 'props.data.allContentfulCv.edges')
    const title = 'Resume | ' + siteTitle
    const logo = get(this, 'props.data.contentfulLogo')
    const pageContent = get(this, 'props.data.pageContent')

    return (
      <Layout logo={logo}>
        <Helmet title={title} />
        <Hero pageContent={pageContent} />
        <div style={{ marginBottom: 30, color: `#C6C7C4` }}>
          <Typography variant="h3" color="inherit" align="center">
            {pageContent.secondTitle}
          </Typography>
        </div>
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ margin: `0 auto` }}
          >
            {cv.map(({ node }) => (
              <FullCV key={node.id} cv={node} image={node.placeLogo.file.url} />
            ))}
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default CVPage

export const pageQuery = graphql`
  query CVQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCv(sort: { fields: sequence, order: ASC }) {
      edges {
        node {
          id
          name
          myTitle
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          placeLogo {
            file {
              url
            }
          }
          duties {
            duties
          }
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
    pageContent: contentfulPageContent(page: { eq: "Resume" }) {
      title
      description {
        description
      }
      secondTitle
    }
  }
`
