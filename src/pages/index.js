import React from 'react'
import { graphql } from 'gatsby'

import HeroHomePage from '../components/homePage'
import Layout from '../components/layout'
import Experience from '../components/experience'

const Home = ({ data }) => {
  const cv = data.allContentfulCv.edges

  return (
    <Layout pageTitle="Welcome">
      <HeroHomePage />
      <Experience cv={cv} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
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
  }
`
