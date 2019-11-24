import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceBanner from "../components/experience-banner"
import AllBlogPosts from "../components/all-blog-posts"

const useStyles = makeStyles({
  link: {
    color: `#20BF55`,
    textDecoration: `none`,
    "&:hover": {
      textDecoration: `underline`,
    },
  },
  main: {
    margin: `0 auto`,
    maxWidth: `85%`,
    paddingTop: `50px`,
    paddingBottom: `80px`,
  },
  blogList: {
    margin: `0 auto`,
    maxWidth: `85%`,
    paddingTop: `50px`,
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <Layout>
      <SEO title="Damian Canetti-Rios" />
      <div className={classes.main}>
        <Typography
          variant={matches ? "h3" : "h4"}
          color="primary"
          align="center"
        >
          Damian Canetti-Rios is a strategist and currently the co-Managing
          Director of{" "}
          <a href="https://hunterapplied.com" className={classes.link}>
            {"Hunter Applied Research"}
          </a>
          , a boutique research management and government grants consultancy
        </Typography>
      </div>
      <ExperienceBanner />
      <Typography
        variant={matches ? "h3" : "h4"}
        color="primary"
        align="center"
        className={classes.blogList}
      >
        Watch tape &<br />
        Share notes
      </Typography>
      <AllBlogPosts />
    </Layout>
  )
}

export default IndexPage
