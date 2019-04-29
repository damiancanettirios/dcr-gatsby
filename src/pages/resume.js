import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import FullCV from '../components/full-cv'

class CVPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const cv = get(this, 'props.data.allContentfulCv.edges')
    const title = 'Resume | ' + siteTitle
    const logo = get(this, 'props.data.contentfulLogo')

    return (
      <Layout logo={logo}>
        <Helmet title={title} />
        <div
          style={{
            color: `#C6C7C4`,
            margin: `0 auto`,
            maxWidth: `80%`,
            padding: `40px 0px 40px 0px`,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <Typography variant="h3" color="inherit" align="center">
              Career Summary & Interests
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              align="center"
              style={{ marginTop: 20, marginBottom: 50 }}
            >
              I am a strategy professional focused on helping innovative
              companies define their research programs and access funding to
              support their commercialisation. I have been 'classically-trained'
              as a management strategy consultant and enjoy working collegially
              with ambitious people solving big problems
            </Typography>
          </div>
          <div style={{ marginBottom: 30 }}>
            <Typography variant="h3" color="inherit" align="center">
              Professional & Academic
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
                <FullCV
                  key={node.id}
                  cv={node}
                  image={node.placeLogo.file.url}
                />
              ))}
            </Grid>
          </div>
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
  }
`
