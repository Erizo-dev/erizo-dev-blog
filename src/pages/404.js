import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  container: {
    maxWidth: "800px",
    marginTop: "80px",
    paddingTop: "24px",
    width: "100%"
  },
  card : {
  }
})

const NotFoundPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <SEO title="404: Not found" />
            <Typography variant="h3">Not found 😥</Typography>
            <p>Maybe it does not exits ... 🤔</p>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
