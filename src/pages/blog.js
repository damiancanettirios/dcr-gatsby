import React from 'react'
import { graphql } from 'gatsby'

import usePosts from '../hooks/use-posts'
import Layout from '../components/layout'
import BlogList from '../components/blog-list'

const Blog = ({ data: { blog } }) => {
  const posts = usePosts()
  return (
    <Layout pageTitle="Blog">
      <BlogList content={blog} posts={posts} />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    blog: contentfulPageContent(page: { eq: "Blog" }) {
      page
      title
      description {
        description
      }
    }
  }
`
