import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'

import usePosts from '../hooks/use-posts'

const useStyles = makeStyles({
  hero: {
    background: `#1D1E2C`,
    color: `#C6C7C4`,
    margin: `0 auto`,
    maxWidth: `75%`,
    paddingTop: `50px`,
    paddingBottom: `80px`,
  },
  main: {
    background: `#1D1E2C`,
    color: `#C6C7C4`,
    width: `95%`,
    margin: `0 auto`,
    paddingTop: `50px`,
    paddingBottom: `80px`,
  },
  link: {
    textDecoration: `none`,
    '&:hover': {
      color: `#20BF55`,
      textDecoration: `underline`,
    },
  },
  button: {
    color: `white`,
  },
  list: {
    color: `#C6C7C4`,
    width: `100%`,
    margin: `0 auto`,
    marginTop: 20,
  },
  card: {
    background: `#ffffff11`,
    color: `white`,
    margin: 0,
  },
  typography: {
    color: `#C6C7C4`,
  },
})

const Home = ({ data }) => {
  const classes = useStyles()
  const cv = data.resume.edges
  const latestThoughts = data.latestThoughts
  const posts = usePosts()

  return (
    <Layout pageTitle="Welcome">
      {/* Hero */}
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

      {/* Experience */}
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
            <Grid key={node.id} item md={2} sm={4} xs={6}>
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
      {/* Blog */}
      <div className={classes.main}>
        <Typography variant="h3" color="inherit" align="center">
          {latestThoughts.title}
        </Typography>
        <Grid container justify="center" spacing={4} className={classes.list}>
          {posts.map(post => (
            <Grid
              item
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={post.id}
              style={{ margin: 0 }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <Link to={`/blog/${post.slug}`}>
                    <Img fluid={post.image.fluid} alt={post.image.title} />
                  </Link>
                </CardActionArea>
                <CardContent>
                  <Link to={`/blog/${post.slug}`} className={classes.link}>
                    <Typography variant="h5" color="inherit" gutterBottom>
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1" color="inherit">
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/blog/${post.slug}`}
                    size="small"
                    className={classes.button}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
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
