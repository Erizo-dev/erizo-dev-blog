/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it


require("prismjs/themes/prism-tomorrow.css")

const React = require("react")

const MyProvider = require("./src/Context/myContext").myProvider



exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
   <MyProvider {...props}>{element}</MyProvider>
      
  )
}

