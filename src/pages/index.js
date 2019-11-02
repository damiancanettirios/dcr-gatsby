import React from 'react'
import { graphql } from 'gatsby'

import HeroHomePage from '../components/homePage'
import Layout from '../components/layout'
import Experience from '../components/experience'
import BlogList from '../components/blog-list'

import usePosts from '../hooks/use-posts'

const Home = ({ data }) => {
  const cv = data.resume.edges
  const latestThoughts = data.latestThoughts
  const posts = usePosts()

  return (
    <Layout pageTitle="Welcome">
      <HeroHomePage />
      <Experience cv={cv} />
      <BlogList content={latestThoughts} posts={posts} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    resume: allContentfulCv(sort: { fields: sequence, order: DESC }) {
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
    latestThoughts: contentfulPageContent(page: { eq: "Latest Thoughts" }) {
      page
      title
      description {
        description
      }
    }
  }
`
