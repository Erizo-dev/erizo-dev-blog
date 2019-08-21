import React from "react"

import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core/styles"

import useLocalStorage from "../hooks/UseLocalStorage"

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
}

export const myContext = React.createContext(defaultState)

export const myProvider = props => {
  const [theme, setTheme] = useLocalStorage(false)
  const toggleDarkMode = () => {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <myContext.Provider value={{
          theme,
          toggleDarkMode
      }}>
      {props.children}
      </myContext.Provider>
    </ThemeProvider>
  )
}
