import React from "react"
import Typography from "@material-ui/core/Typography"

const TextHero = ({ pageContent }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: `80%`,
      padding: `60px 0px 60px 0px`,
    }}
  >
    <Typography variant="h3" color="primary" align="center">
      {pageContent.title}
    </Typography>
    <Typography
      variant="h6"
      color="primary"
      align="center"
      style={{ marginTop: 20, marginBottom: 50, fontWeight: `normal` }}
    >
      {pageContent.description.description}
    </Typography>
  </div>
)

export default TextHero
