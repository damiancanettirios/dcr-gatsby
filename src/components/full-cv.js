import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
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
  cvCompany: {
    color: `#C6C7C4`,
  },
  cvTitle: {
    color: `#20BF55`,
  },
  cvDetail: {
    width: 700,
    color: `#C6C7C4`,
    paddingBottom: 50,
  },
  [theme.breakpoints.down('sm')]: {
    cv: {
      width: `100%`,
    },
    cvImage: {
      margin: `0 auto`,
    },
    cvCompany: {
      margin: `0 auto`,
    },
    cvTitle: {
      margin: `0 auto`,
    },
    cvDetail: {
      width: `90%`,
      margin: `0 auto`,
    },
  },
}))

const CvEntry = ({ cv, image }) => {
  const [active, setActive] = useState(true)
  const classes = useStyles()
  return (
    <>
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
            <Grid item className={classes.cvCompany}>
              <Typography variant="h5" color="inherit">
                {cv.name}
              </Typography>
            </Grid>
            <Grid item className={classes.cvTitle}>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: `normal` }}
              >
                {cv.myTitle}
              </Typography>
            </Grid>
            <Grid item className={classes.cvTitle}>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: `normal` }}
              >
                {cv.startDate}
                {' - '}
                {cv.endDate != null ? cv.endDate : 'present'}
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={1} className={classes.cvCompany}>
            <IconButton color="inherit" onClick={() => setActive(!active)}>
              {!active ? <MdExpandLess /> : <MdExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        {!active ? (
          <Grid item container md={12} sm={12} className={classes.cvDetail}>
            <Typography
              variant="h6"
              color="inherit"
              style={{ fontWeight: `normal` }}
            >
              {cv.duties.duties}
            </Typography>
          </Grid>
        ) : (
          <div />
        )}
      </div>
    </>
  )
}

export default CvEntry
