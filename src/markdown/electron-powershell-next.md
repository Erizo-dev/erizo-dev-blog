---
title: "Beautiful admin tools with Powershell and Electron"
date: "2019-08-25"
description: "Rescuing our sysadmin friends from the ugliness of their .hta and their Powershell prompt..."
thumbnail: "./postImages/blue-dotnet.jpg"
imageCredit: "Photo by Lucas Fonseca"
---

![Photo by Lucas Fonseca](./postImages/blue-dotnet.jpg)

## Rescuing our sysadmin friends from the ugliness of their .hta and their Powershell prompt.


That was one thing I have been asked at work lately: make a nice UI for our Powershell scripts to be run locally.

It is true that until not that long ago the windows ecosystem suffered from the lack of a decent UI framework.
Leveraging the full power of Wpf is not exactly easy, Winforms are not really pretty, .hta is kind of outdated ...
But now you have Electron.
Let us use that.

Basically, this is a standalone version of chrome you can use run any web UI you want and any node program you wish.

Splendid, I am going to rewrite all of those admin scripts in node ... but hey wait a minute. Didn't you know there was somewhere an npm package called [node-powershell](https://rannn505.github.io/node-powershell/).

You know what I found [this excellent blog post](https://xainey.github.io/2017/powershell-electron-demo/) written a couple of years ago. It pretty much explains everything, except that in 2019, I am not thrilled by the idea of writing a jquery frontend. I do acknowledge that for displaying raw data, dataTables remains pretty efficient and that the bundle size of the javascript is not relevant when it comes to an electron app, but I kind of like the way modern apps are written.

This being said setting up an electron application template / boilerplate for Electron is still pretty cumbersome. This is where the second part of the equation comes into play [Nextron](https://github.com/saltyshiomix/nextron).
Installing this as a global package gives you access to brilliant templates. I went for this one :

```bash
nextron init my-app --example with-javascript-material-ui
```

The problem now was to find a way to tell my next frontend where its Powershell scripts were hosted.
Static files served by next could not help much because they are served through Http.

### Sending scripts location through IPC channel

My first idea was to locate the script files using the IPC helpers provided by Nextron.
Those are nice wrappers meant to enforce consistent channel naming.

```javascript
// /main/helpers/background.js
ipc.answerRenderer("scriptPath", function(e, args) {
 return path.resolve(path.join(__dirname, "scripts", "myScript.ps1"))
})
```

and the request this path in my pages when they load for instance.

```jsx
import Powershell from "node-powershell"
//...
useEffect(() => {
 const doStuff = async () => {
 const ps = new Powershell({
 executionPolicy: "Bypass",
 noProfile: true,
 })
 const scriptPath = await ipc.callMain("scriptPath")
 // same channel name here
 ps.addCommand(scriptPath, [])
 const psResult = await ps.invoke()
 const jsonResult = JSON.parse(psResult)
 }
 doStuff()
}, [])
```

### Using a Webpack loader for Powershell scripts

The above solution works just fine, but even with the help of Nextron's helpers, I think it was a bit complex.
Powershell scripts are just text files. Why wouldn't I try to use a Webpack loader to grab their content and make it accessible to the React app like we do with CSS.
To do that I googled for a simple loader : [raw-loader](https://github.com/webpack-contrib/raw-loader).

```shell
npm i 'raw-loader'
```

I then add to tweak Nextron's Webpack config so that it handles ou .ps1 with our newly installed loader.

```javascript
// /renderer/next.config.js
module.exports = {
 webpack: config => {
 config.module.rules.push({
 test: [/\.ps1$/i],
 use: 'raw-loader',
 });
 return Object.assignconfig, {
 target: 'electron-renderer'
 })
 }

}
```

The code in the Next page will then shrink significantly as you can use Webpack's import to store your whole script in a variable.

```jsx
import localPs1 from "../helpers/myLocal.ps1"
// ....
ps.addCommand(localPs1)
```

Much much simpler. I have no idea of the performance difference between each approach though.
As the channel approach can be used to solve many other problems I leave it there for reference.
