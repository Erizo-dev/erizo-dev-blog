import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/styles"
import { withTheme } from '@material-ui/styles';


const styles = theme => {
  return {
  root : {
    marginTop: "80px",
    padding: '18px 36px',
    backgroundColor: theme.palette.background.paper
  },

  markdown : {
    '& p' : {
      
      textIndent: "24px",
    },

  }
}}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container className={this.props.classes.root}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            
          />
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>
            Appetite required : {"🍰".repeat(post.timeToRead)} -{" "}
            {post.timeToRead} minutes
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className={this.props.classes.markdown}/>
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </Layout>
    )
  }
}

export default withStyles(styles)(withTheme(BlogPostTemplate))

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date
        description
      }
    }
  }
`

// (formatString: "MMMM DD, YYYY")
