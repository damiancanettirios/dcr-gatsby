import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
      </Helmet>
      <Navigation logo={logo} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
