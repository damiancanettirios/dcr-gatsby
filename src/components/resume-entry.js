import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"

import { MdExpandLess, MdExpandMore } from "react-icons/md"

const useStyles = makeStyles({
  resumeBig: {
    paddingBottom: 30,
    width: 700,
  },
  resumeSmall: {
    paddingBottom: 30,
    width: 400,
  },
  resumeImage: {
    backgroundColor: `#C6C7C4`,
    width: 100,
    height: 100,
    borderRadius: `50%`,
    margin: `0 auto`,
  },
  resumeCompany: {
    color: `#C6C7C4`,
    margin: `0 auto`,
  },
  resumeTitle: {
    color: `#20BF55`,
    margin: `0 auto`,
  },
  resumeDetailBig: {
    width: 700,
    color: `#C6C7C4`,
    padding: 10,
    paddingBottom: 50,
    margin: `0 auto`,
  },
  resumeDetailSmall: {
    width: 400,
    color: `#C6C7C4`,
    padding: 10,
    paddingBottom: 50,
    margin: `0 auto`,
  },
})

const ResumeEntry = ({ cv, image }) => {
  const [active, setActive] = useState(true)
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:800px)")
  return (
    <>
      <div>
        <Grid
          item
          container
          direction="row"
          className={matches ? classes.resumeBig : classes.resumeSmall}
        >
          <Grid item container md={3} sm={12}>
            <Grid
              item
              container
              alignItems="center"
              className={classes.resumeImage}
            >
              <img
                src={image}
                alt={cv.name}
                style={{ margin: `0 auto`, width: 80 }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md={8} sm={12}>
            <Grid item className={classes.resumeCompany}>
              <Typography variant="h5" color="inherit">
                {cv.name}
              </Typography>
            </Grid>
            <Grid item className={classes.resumeTitle}>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: `normal` }}
              >
                {cv.myTitle}
              </Typography>
            </Grid>
            <Grid item className={classes.resumeTitle}>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: `normal` }}
              >
                {cv.startDate}
                {" - "}
                {cv.endDate != null ? cv.endDate : "present"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={1} className={classes.resumeCompany}>
            <IconButton color="inherit" onClick={() => setActive(!active)}>
              {!active ? <MdExpandLess /> : <MdExpandMore />}
            </IconButton>
          </Grid>
        </Grid>
        {!active ? (
          <Grid
            item
            container
            md={12}
            sm={12}
            className={
              matches ? classes.resumeDetailBig : classes.resumeDetailSmall
            }
          >
            <Typography
              variant="h6"
              color="primary"
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

export default ResumeEntry
