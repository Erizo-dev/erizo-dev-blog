import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/styles"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  return {
  subTitle: {
    marginTop: "100px",
    display: 'block',
    color: "#777",
  },
  postsContainer: {
    maxWidth: "800px",
    marginTop: "48px"
  },
  postCard: {
    marginBottom: "2rem",
    maxWidth: "600px",
  },
  cardImage: {
    maxHeight: "200px",
  },

  postTitle: {
    textDecoration: "none",
    color: "#777",
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.type =="light" ? "#444" : "#AAA" ,
    },
  },
}})

const IndexPage = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Erizo's developer blog</h2>
      <Typography className={classes.subTitle} variant="body1">Here are my latest blog posts as a developer.
      <br />
         I hope you can find some ideas there.Last update:
         <ul>
           <li> changed theme main color from teal to grey!</li>
           <li> added a couple of articles on Gdpr compiance.</li>
         </ul>
         </Typography>
      <div className={classes.postsContainer}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Card key={node.fields.slug} className={classes.postCard}>
              <CardContent>
                <Link className={classes.postTitle} to={node.fields.slug}>
                {node.frontmatter.thumbnail && (
                  <Img
                    className={classes.cardImage}
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={node.frontmatter.imageCredit}
                    objectFit="scale-down"
                  />
                )}
                  <Typography variant="h5" component="h2">{title}</Typography>
                </Link>

                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </CardContent>
            </Card>
          )
        })}
      </div>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            imageCredit
            thumbnail {
              childImageSharp {
                fluid  {
                  src
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
// (formatString: "MMMM DD, YYYY")
