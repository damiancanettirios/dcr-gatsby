import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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

const Hero = () => {
  const classes = useStyles()
  return (
    <div className={classes.hero}>
      <Typography
        variant="h3"
        color="inherit"
        align="center"
        className={classes.typography}
      >
        Damian Canetti-Rios is a strategist and currently the co-Managing
        Director of
        <span style={{ color: `#20BF55` }}>{' Hunter Applied Research'}</span>,
        a boutique research management and government grants consultancy
      </Typography>
    </div>
  )
}

export default Hero
