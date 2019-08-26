import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    backgroundColor: `#1D1E2C`,
    border: `1px solid #C6C7C4`,
    borderTop: `3px solid #20BF55`,
    marginTop: 10,
    height: `auto`,
  },
  cardContent: {
    height: `100%`,
  },
  link: {
    textDecoration: `none`,
    '&:hover': {
      textDecoration: `underline`,
      color: `#20BF55`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    cardContent: {
      height: `auto`,
    },
  },
  [theme.breakpoints.down('sm')]: {
    card: {},
    cardGrid: {
      marginRight: 0,
      marginBottom: 10,
    },
    image: {
      borderBottom: `1px solid #C6C7C4`,
    },
  },
})

const EachExperimentCol = ({ node, classes }) => (
  <Card className={classes.card}>
    <Grid item container direction="row">
      {/* Photo */}
      <Grid item xl={2} lg={4} md={5} sm={12} xs={12}>
        <Img
          fluid={node.heroImage.fluid}
          alt={node.heroImage.title}
          className={classes.image}
        />
      </Grid>
      {/* Text */}
      <Grid item xl={10} lg={8} md={7} sm={12} xs={12}>
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{ height: `100%` }}
          >
            <Grid item>
              <Link to={`/experiments/${node.slug}`} className={classes.link}>
                <Typography
                  variant="h5"
                  color="primary"
                  style={{ fontWeight: `bold` }}
                >
                  {node.title}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                style={{ marginTop: 10, fontWeight: `normal` }}
              >
                {node.shortDescription}
              </Typography>
            </Grid>
            <Grid item>
              <div style={{ marginTop: 10 }}>
                {node.tags.map(tag => (
                  <Chip
                    key={tag}
                    label={tag}
                    style={{ marginTop: 5, marginRight: 5 }}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
)

export default withStyles(styles)(EachExperimentCol)
