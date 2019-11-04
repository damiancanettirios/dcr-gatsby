import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navigation from './navigation'
import Footer from './footer'
import Helmet from 'react-helmet'
import './base.css'

import useSiteMetadata from '../hooks/use-sitemetadata'

const Layout = ({ children, pageTitle }) => {
  const { title, description } = useSiteMetadata()

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
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle + ' | ' + title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline />
      <div style={{ backgroundColor: `#1D1E2C` }}>
        <Navigation logo={logo} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
