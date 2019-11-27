import React, { useState } from "react"
import { Link } from "gatsby"

import { useCookies } from "react-cookie"

import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Switch from "@material-ui/core/Switch"
import { makeStyles } from "@material-ui/styles"

import grey from "@material-ui/core/colors/grey"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => {
  return {
    root: {
      margin: "auto",
      Width: "100rem",
      padding: "1rem",
    },
    paper: {
      padding: "1rem",
    },
    policyLink: {
      textDecoration: "none",
      color: grey[900],

      "&:hover": {
        color: grey[700],
      },
    },
    content: {
      marginBottom: "1rem",
    },
    box: {
        padding: "1rem",
    }
  }
})

function cookiesModal(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["test-opt-in", "_ga"])

  const [open, setOpen] = useState(!cookies["test-opt-in"] || props.open)
  const [ga, setGa] = useState({
    gaEnabled: !!cookies["test-opt-in"],
  })
  const classes = useStyles()

  const handleClose = () => {
    console.log("will do stuff shortly")
    console.log("ga", ga)
    if (ga.gaEnabled) {
      setCookie("test-opt-in", 1)
    } else {
      removeCookie("test-opt-in")
      removeCookie("_ga")
    }
    setOpen(false)
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.root}
    >
      <DialogTitle id="simple-dialog-title">
        <Box boxShadow={1} className={classes.box}>Set privacy policy</Box>
      </DialogTitle>
      <Paper className={classes.paper}>
        <p>
          You can check our policies : &nbsp;
          <Link to="/" className={classes.policyLink}>
            here
          </Link>
          .
        </p>
        <div className={classes.content}>
          Enable google analytics &nbsp;
          <Switch
            checked={ga.gaEnabled}
            onChange={e => setGa({ gaEnabled: !ga.gaEnabled })}
            value="checkedA"
          />
        </div>

        <Button onClick={handleClose} variant="outlined" color="secondary">
          OK
        </Button>
      </Paper>
    </Dialog>
  )
}

export default cookiesModal
