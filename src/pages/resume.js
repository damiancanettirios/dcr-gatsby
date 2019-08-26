import React from 'react'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import FullCV from '../components/full-cv'
import Hero from '../components/hero'

const CVPage = ({ data }) => {
  const cv = data.allContentfulCv.edges
  const pageContent = data.pageContent

  return (
    <Layout pageTitle="Resume">
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

export default CVPage

export const pageQuery = graphql`
  query CVQuery {
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
    pageContent: contentfulPageContent(page: { eq: "Resume" }) {
      title
      description {
        description
      }
      secondTitle
    }
  }
`
