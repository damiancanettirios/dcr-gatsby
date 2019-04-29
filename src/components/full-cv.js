import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import ChevronDownIcon from 'mdi-material-ui/ChevronDown'
import ChevronUpIcon from 'mdi-material-ui/ChevronUp'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  cv: {
    paddingBottom: 30,
    width: 700,
  },
  cvImage: {
    backgroundColor: `#C6C7C4`,
    width: 100,
    height: 100,
    borderRadius: `50%`,
  },
  cvDetail: {
    width: 700,
    paddingBottom: 50,
  },
  [theme.breakpoints.down('sm')]: {
    cv: {
      width: `100%`,
    },
    cvImage: {
      margin: `0 auto`,
    },
    cvTitle: {
      margin: `0 auto`,
    },
    cvDetail: {
      width: `100%`,
    },
  },
})

class CvEntry extends React.Component {
  state = {
    active: true,
  }

  handleClick = () => {
    const { active } = this.state
    this.setState({
      active: !active,
    })
  }

  render() {
    const { cv, image, classes } = this.props
    const { active } = this.state
    return (
      <React.Fragment>
        <div>
          <Grid item container direction="row" className={classes.cv}>
            <Grid item container md={3} sm={12}>
              <Grid
                item
                container
                alignItems="center"
                className={classes.cvImage}
              >
                <img
                  src={image}
                  alt={cv.name}
                  style={{ margin: `0 auto`, width: 80 }}
                />
              </Grid>
            </Grid>
            <Grid item container direction="column" md={8} sm={12}>
              <Grid item style={{ paddingTop: 10 }} className={classes.cvTitle}>
                <Typography variant="h5" color="secondary">
                  {cv.name}
                </Typography>
              </Grid>
              <Grid item className={classes.cvTitle}>
                <Typography variant="body1" color="primary">
                  {cv.myTitle}
                </Typography>
              </Grid>
              <Grid item className={classes.cvTitle}>
                <Typography variant="body1" color="primary">
                  {cv.startDate}
                  {' - '}
                  {cv.endDate != null ? cv.endDate : 'present'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={1} className={classes.cvTitle}>
              <IconButton color="secondary" onClick={this.handleClick}>
                {!active ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </IconButton>
            </Grid>
          </Grid>
          {!active ? (
            <Grid item container md={12} sm={12} className={classes.cvDetail}>
              <Typography variant="body1" color="secondary">
                {cv.duties.duties}
              </Typography>
            </Grid>
          ) : (
            <div />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CvEntry)
