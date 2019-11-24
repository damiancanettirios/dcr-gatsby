import React from "react"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import IconButton from "@material-ui/core/IconButton"

const Footer = () => {
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
        <IconButton color="secondary">
          <FaTwitter />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/damiancanettirios/">
        <IconButton color="secondary">
          <FaLinkedinIn />
        </IconButton>
      </a>
      <a href="mailto:damian.canetti.rios@gmail.com">
        <IconButton color="secondary">
          <MdEmail />
        </IconButton>
      </a>
    </div>
  )
}

export default Footer
