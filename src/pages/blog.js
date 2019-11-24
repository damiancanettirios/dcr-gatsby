import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextHero from "../components/text-hero"
import AllBlogPosts from "../components/all-blog-posts"

const Blog = ({ data }) => {
  const pageContent = data.pageContent
  return (
    <Layout>
      <SEO title="Blog" />
      <TextHero pageContent={pageContent} />
      <AllBlogPosts />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    pageContent: contentfulPageContent(page: { eq: "Blog" }) {
      page
      title
      description {
        description
      }
    }
  }
`
