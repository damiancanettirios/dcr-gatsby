import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/Button'
import { MdMenu } from 'react-icons/md'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  hoverStyles: {
    '&:hover': {
      color: `#C6C7C4`,
    },
  },
  logo: {
    margin: `0 auto`,
  },
  [theme.breakpoints.down('sm')]: {
    logo: {
      marginLeft: 0,
    },
  },
  [theme.breakpoints.up('md')]: {
    logo: {
      paddingTop: 30,
      paddingBottom: 30,
    },
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
      color: `#C6C7C4`,
    }}
  >
    <Link
      to={props.direction}
      color="inherit"
      style={{ textDecoration: `none` }}
    >
      <Button color="secondary">{props.name}</Button>
    </Link>
  </li>
)

class Navigation extends React.Component {
  state = {
    top: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes, logo } = this.props

    const fullList = (
      <div style={{ margin: `auto` }}>
        <List component="nav">
          {['resume', 'experiments'].map((text, index) => (
            <ListItemLink key={text} to={`/${text}`}>
              <ListItemText
                primary={text}
                style={{ textTransform: `uppercase` }}
              />
            </ListItemLink>
          ))}
        </List>
      </div>
    )

    return (
      <nav role="navigation">
        <ul
          style={{
            listStyle: `none`,
            padding: 0,
            margin: `0 auto`,
            width: `90%`,
            minHeight: `60px`,
            fontSize: `1.25em`,
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.logo}
          >
            <Grid item>
              <li
                style={{
                  display: `inline-flex`,
                  alignItems: `center`,
                  color: `#C6C7C4`,
                }}
              >
                <Link to="/" style={{ textDecoration: `none`, padding: 10 }}>
                  <img
                    src={logo.image.file.url}
                    alt={logo.name}
                    style={{ width: 200 }}
                  />
                </Link>
              </li>
            </Grid>
            {isWidthUp('md', this.props.width) ? (
              <Hidden smDown>
                <Grid item>
                  <NavLink
                    direction="/resume"
                    name="RESUME"
                    hoverStyles={classes.hoverStyles}
                  />
                  <NavLink
                    direction="/experiments"
                    name="EXPERIMENTS"
                    hoverStyles={classes.hoverStyles}
                  />
                </Grid>
              </Hidden>
            ) : (
              <div style={{ color: `#C6C7C4` }}>
                <Grid item style={{ width: `0 auto` }}>
                  <IconButton
                    color="inherit"
                    onClick={this.toggleDrawer('top', true)}
                    style={{ minWidth: 20, padding: 3 }}
                  >
                    <MdMenu style={{ width: `auto` }} />
                  </IconButton>
                </Grid>
                <Drawer
                  anchor="top"
                  open={this.state.top}
                  onClose={this.toggleDrawer('top', false)}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('top', false)}
                    onKeyDown={this.toggleDrawer('top', false)}
                  >
                    {fullList}
                  </div>
                </Drawer>
              </div>
            )}
          </Grid>
        </ul>
      </nav>
    )
  }
}

export default withStyles(styles)(withWidth()(Navigation))
