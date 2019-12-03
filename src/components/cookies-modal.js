import React, { useState } from "react"
import { Link } from "gatsby"

import { navigate } from "gatsby"

import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Switch from "@material-ui/core/Switch"
import { makeStyles } from "@material-ui/styles"
import { myContext} from "../Context/myContext"


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
      backgroundColor: grey[200],
      color: "black",
    },
    policyLink: {
      textDecoration: "none",
      color: grey[900],
      cursor: "pointer",

      "&:hover": {
        color: grey[700],
      },
    },
    content: {
      margin: "0 1rem 2rem 1rem",
    },
    box: {
      padding: "1rem",
      backgroundColor: grey[200],
      color: grey[900],
    },
    dialogTitle: {
      backgroundColor: grey[200],
      color: grey[900],
    },
  }
})

function cookiesModal() {

  //const [preferences, setPreferences] = useGdpr()
  //const [open, setOpen] = useState((!preferences.rememberPreferences))
  const {modalOpen, preferences, setModalOpen, setPreferences} = React.useContext(myContext)



  const [switchState, setSwitchState] = useState({
    gaSwitch: false,
  })
  const classes = useStyles()

  const handleClose = () => {
    setPreferences({
      rememberPreferences: true,
      gaEnabled: switchState.gaSwitch,
    })
    setModalOpen(false)
  }

  const handleChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const handleLinkClicked = () => {
    setModalOpen(false)
    navigate("/policy")
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={modalOpen }
      className={classes.root}
      disableBackdropClick
    >
      <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
        <Box boxShadow={1} className={classes.box}>
          Set privacy policy
        </Box>
      </DialogTitle>
      <Paper className={classes.paper}>
        <p>
          You can check our policies : &nbsp;
          <span className={classes.policyLink} onClick={handleLinkClicked}>
            here
          </span>
          .
        </p>

        <div className={classes.content}>
          Enable google analytics &nbsp;
          <Switch
            checked={switchState.gaSwitch}
            onChange={handleChange("gaSwitch")}
            value="gaSwitch"
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
