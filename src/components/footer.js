import React from 'react'
import TwitterIcon from 'mdi-material-ui/Twitter'
import LinkedinIcon from 'mdi-material-ui/Linkedin'
import EmailIcon from 'mdi-material-ui/At'
import IconButton from '@material-ui/core/IconButton'

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          paddingTop: 20,
          paddingBottom: 30,
        }}
      >
        <a href="https://twitter.com/dcrrrrrrrrr">
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/damiancanettirios/">
          <IconButton color="primary">
            <LinkedinIcon />
          </IconButton>
        </a>
        <a href="mailto:damian.canetti.rios@gmail.com">
          <IconButton color="primary">
            <EmailIcon />
          </IconButton>
        </a>
      </div>
    )
  }
}

export default Footer
