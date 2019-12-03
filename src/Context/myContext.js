import React, {useState} from "react"

import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core/styles"

import useLocalStorage from "../hooks/UseLocalStorage"


import {useGdpr} from "../hooks/UseGdpr"


const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
})
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const defaultState = {
  theme: false,
  toggleDarkMode: () => {},
  modalOpen: false,
  preferences: {
    rememberPreferences: false,
    gaEnabled: false
  },
  setModalOpen : () => {},
  setPreferences : () => {},

}

export const myContext = React.createContext(defaultState)

export const myProvider = props => {
  const [theme, setTheme] = useLocalStorage(false)
  const toggleDarkMode = () => {
    setTheme(!theme)
  }
  const [preferences, setPreferences] = useGdpr()
  const [modalOpen, setModalOpen] = useState((!preferences.rememberPreferences))

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <myContext.Provider value={{
          theme,
          toggleDarkMode,
          modalOpen,
          preferences,
          setModalOpen,
          setPreferences
      }}>
      {props.children}
      </myContext.Provider>
    </ThemeProvider>
  )
}
