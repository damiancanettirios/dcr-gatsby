import React from 'react'
import { graphql } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'
import BlogList from '../components/blog-list'

import usePosts from '../hooks/use-posts'

const useStyles = makeStyles(theme => ({
  hero: {
    background: `#1D1E2C`,
    color: `#C6C7C4`,
    margin: `0 auto`,
    maxWidth: `75%`,
    paddingTop: `50px`,
    paddingBottom: `80px`,
  },
  [theme.breakpoints.up('lg')]: {
    hero: {
      paddingTop: `150px`,
      paddingBottom: `150px`,
    },
    typography: {
      fontSize: `300%`,
    },
  },
  [theme.breakpoints.down('sm')]: {
    hero: {
      paddingTop: `20px`,
      paddingBottom: `20px`,
    },
    typography: {
      fontSize: `200%`,
    },
  },
}))

const Home = ({ data }) => {
  const classes = useStyles()
  const cv = data.resume.edges
  const latestThoughts = data.latestThoughts
  const posts = usePosts()

  return (
    <Layout pageTitle="Welcome">
      <div className={classes.hero}>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          className={classes.typography}
        >
          Damian Canetti-Rios is a strategist and currently the co-Managing
          Director of
          <span style={{ color: `#20BF55` }}>{' Hunter Applied Research'}</span>
          , a boutique research management and government grants consultancy
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: `#C6C7C4`,
          padding: 15,
        }}
      >
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          style={{
            padding: 0,
            margin: `0px 0px 10px 0px`,
            fontWeight: `normal`,
          }}
        >
          With Experience Gained From
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          {cv.map(({ node }) => (
            <Grid key={node.id} item md={2} sm={6}>
              <div style={{ marginTop: `10px`, marginBottom: `10px` }}>
                <img
                  src={node.placeLogo.file.url}
                  alt={node.name}
                  style={{
                    width: 100,
                    filter: `grayscale(100%)`,
                    display: `block`,
                    marginLeft: `auto`,
                    marginRight: `auto`,
                  }}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <BlogList content={latestThoughts} posts={posts} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    resume: allContentfulCv(sort: { fields: sequence, order: DESC }) {
      edges {
        node {
          id
          name
          placeLogo {
            file {
              url
            }
          }
        }
      }
    }
    latestThoughts: contentfulPageContent(page: { eq: "Latest Thoughts" }) {
      page
      title
      description {
        description
      }
    }
  }
`
