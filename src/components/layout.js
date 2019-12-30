/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import { makeStyles } from "@material-ui/styles"
import teal from "@material-ui/core/colors/teal"
import grey from "@material-ui/core/colors/grey"

import CookieModal from "./cookies-modal"

import { useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => {
  return {
    root: {},
    footer: {
      marginTop: "3rem",
      display: "block",
      width: "100%",
      // backgroundColor: teal[600],
      backgroundColor: grey[600],

      height: "200px",
      overflow: "hidden",
    },
    paper: {
      height: "100%",
      width: "100%",
      margin: "O",
      borderRadius: "0",
      // backgroundColor: teal[100]
      backgroundColor: grey[50],
    },
    bgSkew: {
      width: "100%",
      overflow: "hidden",
      transform: "skew(0deg, -2deg) translateY(55px)",
      // backgroundColor: teal[200],
      backgroundColor: grey[200],

      height: "68px",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      color: "black",
    },
  }
})
const Layout = ({ children, modalOpen }) => {

  console.log('modalOpen--*', modalOpen)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <>
      <CookieModal open={modalOpen} />
      <Paper className={classes.paper}>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Container maxWidth="md" className={classes.root}>
          {children}
        </Container>
        <footer className={classes.footer}>
          <Grid className={classes.bgSkew} container spacing={1}>
            <Grid item>
              © {new Date().getFullYear()}, Built with&nbsp;
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Grid>
            <Grid item>
              Our privacy policy is :&nbsp;
              <Link to="/policy">here</Link>
            </Grid>
          </Grid>
        </footer>
      </Paper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
