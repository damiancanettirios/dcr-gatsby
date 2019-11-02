import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  icons: {
    color: `#20BF55`,
  },
  main: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingTop: 20,
    paddingBottom: 30,
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <a href="https://twitter.com/dcrrrrrrrrr" className={classes.icons}>
        <IconButton color="inherit">
          <FaTwitter />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/damiancanettirios/"
        className={classes.icons}
      >
        <IconButton color="inherit">
          <FaLinkedinIn />
        </IconButton>
      </a>
      <a href="mailto:damian.canetti.rios@gmail.com" className={classes.icons}>
        <IconButton color="inherit">
          <MdEmail />
        </IconButton>
      </a>
    </div>
  )
}

export default Footer
