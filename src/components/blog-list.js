import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
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
    marginTop: 20,
    width: `90%`,
    margin: `0 auto`,
    fontSize: `150%`,
  },
  [theme.breakpoints.up('lg')]: {
    main: {
      paddingTop: `150px`,
      paddingBottom: `150px`,
    },
    typography: {
      fontSize: `300%`,
    },
  },
  [theme.breakpoints.down('sm')]: {
    main: {
      paddingTop: `20px`,
      paddingBottom: `20px`,
    },
    typography: {
      fontSize: `200%`,
    },
  },
}))

const BlogList = ({ posts, content }) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Typography variant="h3" color="inherit" align="center">
        {content.title}
      </Typography>
      {content.page != 'Blog' ? null : (
        <Typography
          variant="body1"
          color="inherit"
          align="center"
          className={classes.typography}
        >
          {content.description.description}
        </Typography>
      )}
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
  )
}

export default BlogList
