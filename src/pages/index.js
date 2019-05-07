import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import HeroHomePage from '../components/homePage'
import Layout from '../components/layout'
import Experience from '../components/experience'

class RootIndex extends React.Component {
  render() {
    const cv = get(this, 'props.data.allContentfulCv.edges')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const logo = get(this, 'props.data.contentfulLogo')

    return (
      <Layout location={this.props.location} logo={logo}>
        <Helmet title={siteTitle} />
        <HeroHomePage />
        <Experience cv={cv} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCv(sort: { fields: sequence, order: ASC }) {
      edges {
        node {
          id
          name
          placeLogo {
            file {
              url
            }
          }
        }
      }
    }
    contentfulLogo {
      id
      title
      image {
        file {
          url
        }
      }
    }
  }
`
