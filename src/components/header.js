import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import { MdMenu } from "react-icons/md"

const useStyles = makeStyles({
  hoverStyles: {
    color: `#C6C7C4`,
    "&:hover": {
      color: `#20BF55`,
    },
  },
  logo: {
    margin: `0 auto`,
    marginLeft: 0,
    paddingTop: 30,
    paddingBottom: 30,
  },
  ul: {
    listStyle: `none`,
    padding: 0,
    margin: `0 auto`,
    width: `90%`,
    minHeight: `60px`,
    fontSize: `1.25em`,
  },
  li: {
    display: `inline-flex`,
    alignItems: `center`,
    color: `#C6C7C4`,
  },
})

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />
}

const NavLink = props => (
  <li
    style={{
      display: `inline-flex`,
      alignItems: `center`,
      margin: `0 1em`,
    }}
  >
    <Link
      to={props.direction}
      color="primary"
      style={{ textDecoration: `none` }}
    >
      <Button color="primary">{props.name}</Button>
    </Link>
  </li>
)

const Header = () => {
  const [top, setTop] = useState(false)
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")

  const fullList = (
    <div style={{ margin: `auto` }}>
      <List component="nav">
        {["home", "resume", "experiments", "blog"].map(text => (
          <ListItemLink key={text} to={text !== "home" ? `/${text}` : `/`}>
            <ListItemText
              primary={text}
              style={{ textTransform: `uppercase` }}
            />
          </ListItemLink>
        ))}
      </List>
    </div>
  )

  const { logo } = useStaticQuery(graphql`
    query {
      logo: contentfulAsset(title: { eq: "DamianFace" }) {
        title
        file {
          url
        }
      }
    }
  `)

  return (
    <header>
      <nav role="navigation">
        <ul className={classes.ul}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.logo}
          >
            <Grid item>
              <li className={classes.li}>
                <Link
                  to="/"
                  style={{ textDecoration: `none`, padding: 10, width: 200 }}
                >
                  <img src={logo.file.url} alt={logo.title} />
                </Link>
              </li>
            </Grid>
            {matches ? (
              <Hidden smDown>
                <Grid item>
                  <NavLink
                    direction="/resume"
                    name="RESUME"
                    className={classes.hoverStyles}
                  />
                  <NavLink
                    direction="/experiments"
                    name="EXPERIMENTS"
                    className={classes.hoverStyles}
                  />
                  <NavLink
                    direction="/blog"
                    name="BLOG"
                    className={classes.hoverStyles}
                  />
                </Grid>
              </Hidden>
            ) : (
              <div style={{ color: `#C6C7C4` }}>
                <Grid item style={{ width: `0 auto` }}>
                  <IconButton
                    color="primary"
                    onClick={() => setTop(true)}
                    style={{ minWidth: 20, padding: 3 }}
                  >
                    <MdMenu fontSize="large" style={{ width: `auto` }} />
                  </IconButton>
                </Grid>
                <Drawer anchor="top" open={top} onClose={() => setTop(false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={() => setTop(false)}
                    onKeyDown={() => setTop(false)}
                  >
                    {fullList}
                  </div>
                </Drawer>
              </div>
            )}
          </Grid>
        </ul>
      </nav>
    </header>
  )
}

export default Header
