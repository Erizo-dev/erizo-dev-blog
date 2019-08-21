---
title: "Theming a gatsby site leveraging the gatsby-browser API"
date: "2019-08-29"
description: " Does Gatsby's state management makes providing a theme context trickier than it should "
thumbnail: "./postImages/flowers-cropped.jpg"
imageCredit: "Photo by Scott Webb from Pexels"
---

![Photo by Lucas Fonseca](./postImages/flowers.jpg)

## Gatsby is not preserving the state I have provided in the layout when I change page

 When writing this blog, I wanted to experiment with [@material-ui](https://material-ui.com/). I took a look at theming and found pretty sweet the ability to switch to a dark theme by only toggling a single property.
 Reading Material-ui documentation I first thought I could provide my theme state context in my Layout component.

 ```javascript
 const Layout = ({ children }) => {
  
  const [theme, setTheme] = useState(false)
  const toggleDarkMode = () => {
    setTheme(!theme)
  }

    const lightTheme = createMuiTheme({
    palette : {
      type: 'light'
    }
    })
    const darkTheme = createMuiTheme({
      palette : {
        type: 'dark'
      }
      })

  return (
    <ThemeProvider theme={theme ? lightTheme: darkTheme}>
    // ...
        <Header
          toggleDarkMode={toggleDarkMode}
        />
    // ...
 ```
I soon figured out that this approach does not work so well, and that the state is lost during each navigation between pages.
This behavior kind of surprised me in the first place. I quickly googled my issue and found [this post](https://featurist.co.uk/blog/react-hooks/). 

Storing the state in the local storage so that it survives navigation does come with some extra benefits: our state will survive a full page refresh and it is simple to implement as you only need to swap your useState hook with [useLocalStorage](https://usehooks.com/useLocalStorage). You don't even have to write it yourself which is pretty sweet.

## But if I do want to use state and not local storage

The above solution does not provide any answer on how we could persist our state though, but searching the Gatsby documentation does! Gatsby provides a dedicated method in its [browser-Api](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement).

This wrap root element method let you set up any provider and makes it available everywhere in your application.
There even is a detailed use-case provided [here](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/).

If you are interested in how to set this us with our [@material-ui](https://material-ui.com/) themeProvider, here is how it could look like.

```javascript
// gatsby-browser.js
const MyProvider = require("./src/Context/myContext").myProvider

exports.wrapPageElement = ({ element, props }) => {
  return (
   <MyProvider {...props}>{element}</MyProvider>
  )
}
```
With a context which could look like this (Please not that I reused the useLocalstorage hook, but this was only to handle the full browser refresh).
```javascript
// /src/Context/myContext.js
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
```
You can consume this context anywhere, using the appropriate hook for instance.
```javascript
const ctx = React.useContext(myContext)
```

## And your site's CSS does weird things when you run your production build

This indeed is a last-minute update 😥

I ran into two different issues when building this blog for production for the first time :
-The first is that for some reason my theme object was not available when building the final HTML. I think it had to do with inconsistencies between my gatsby-browser and my gatsby-ssr.js files. I will dig deeper into that issue, but my quick and dirty fix was to have those two files the same.
-The second issue seems to be related @material-ui prefixes its classes names. I found this issue mentioned in this GitHub [issue](https://github.com/gatsbyjs/gatsby/issues/9121). Once again I ended choosing the easy way, and as avised in the issue thread I have added the [gatsby-plugin-material-ui](https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/) plugin.


I hope this post can be helpful to anyone trying to make @material-ui and gatsby work nicely together.


