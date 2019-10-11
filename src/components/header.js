import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import teal from '@material-ui/core/colors/teal'
import grey from '@material-ui/core/colors/grey'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles"
import { myContext} from "../Context/myContext"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    //backgroundColor: teal[200],
    backgroundColor: grey[200],
    color: grey[900],
    paddingBottom: "1rem"
  },
  navBar: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: 'space-between',
  },

  navLink : {
    fontSize: "2rem",
    textDecoration: 'none',
    color: grey[900],

    '&:hover': {
      color: grey[200],
    },

  },
  light : {
    fontSize: "2rem",
    borderRadius: "50%",

  }
 
}))

const Header = ({ siteTitle }) => {

  const ctx = React.useContext(myContext)

  const classes = useStyles()
  return (
    <AppBar className={classes.root}>

        <Toolbar className={classes.navBar}>
            <Typography variant="h2" component="h1">
              <Link to="/" className={classes.navLink}>
                {siteTitle}
              </Link>
            </Typography>
          <Button onClick={ctx.toggleDarkMode} className={classes.light}>🔦</Button>
          
        </Toolbar>
  
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
