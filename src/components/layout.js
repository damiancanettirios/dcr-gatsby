import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import withRoot from '../withRoot'
import './base.css'

class Template extends React.Component {
  render() {
    const { children, logo } = this.props
    return (
      <React.Fragment>
        <Navigation logo={logo} />
        {children}
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRoot(Template)
