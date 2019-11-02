import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => (
  <div
    style={{
      borderBottom: `1px solid #ddd`,
      marginTop: `0.75rem`,
      paddingBottom: `1rem`,
    }}
  >
    <h3>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <p>
      <Link to={`/blog/${post.slug}`}>read this post &rarr;</Link>
    </p>
  </div>
)

export default PostPreview
