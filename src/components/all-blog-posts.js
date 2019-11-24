import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import usePosts from "../hooks/use-posts"

const useStyles = makeStyles({
  card: {
    background: `#ffffff11`,
    color: `white`,
    margin: 0,
  },
  content: {
    height: 250,
  },
  posts: {
    background: `#1D1E2C`,
    width: `95%`,
    margin: `0 auto`,
    paddingBottom: `80px`,
  },
  link: {
    textDecoration: `none`,
    color: `#C6C7C4`,
    "&:hover": {
      textDecoration: `underline`,
      color: `#20BF55`,
    },
    fontWeight: `bold`,
  },
  postArea: {
    color: `#C6C7C4`,
    width: `100%`,
    margin: `0 auto`,
    marginTop: 20,
  },
})

const AllBlogPosts = () => {
  const posts = usePosts()
  const classes = useStyles()
  return (
    <div className={classes.posts}>
      <Grid container justify="center" spacing={4} className={classes.postArea}>
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
              <CardContent className={classes.content}>
                <Grid container direction="column" justify="space-between">
                  <Link to={`/blog/${post.slug}`} className={classes.link}>
                    <Typography variant="h5" color="inherit" gutterBottom>
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1" color="primary">
                    {post.description}
                  </Typography>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/blog/${post.slug}`}
                  size="small"
                  color="primary"
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

export default AllBlogPosts
