import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeEntry from "../components/resume-entry"
import TextHero from "../components/text-hero"

import useResume from "../hooks/use-resume"

const Resume = ({ data }) => {
  const resume = useResume()
  const pageContent = data.pageContent

  return (
    <Layout>
      <SEO title="Resume" />
      <TextHero pageContent={pageContent} />
      <div style={{ marginBottom: 30 }}>
        <Typography variant="h3" color="primary" align="center">
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
          {resume.map(node => (
            <ResumeEntry
              key={node.id}
              cv={node}
              image={node.placeLogo.file.url}
            />
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default Resume

export const pageQuery = graphql`
  query CVQuery {
    pageContent: contentfulPageContent(page: { eq: "Resume" }) {
      title
      description {
        description
      }
      secondTitle
    }
  }
`
