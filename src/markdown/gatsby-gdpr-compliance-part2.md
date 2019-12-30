---
title: "Making a Gatsby site Gdpr compliant part-2: Gatsby"
date: "2019-12-05"
description: " Setting up Gatsby so that it handles the user's preferences"
thumbnail: "./postImages/welcome.jpg"
imageCredit: "Photo by Mabel Amber from Pexels"
---

![Photo by Pixabay](./postImages/welcome.jpg)

## Handling cookies

### The Cookies involved

Setting our users' preferences is only involving three cookies.

#### The "ga-pref-set" cookie 

It there only to remember that the visitor entered its preferences regarding the GA cookies. It may sound weird to set a cookie only to remember not to set another one, but I do not think there is another way.
If the user deletes this cookie either manually or by resetting his preferences from the privacy policy page, he will be asked again for his preferences, letting him eventually change his mind on whether or not he is ok with sending its anonymized IP to Google.

### The "_ga" cookie

These are the cookies set up by Google analytics for its use. The GA script tag is setting them. I will only have to delete them if the user for some reason wishes to forego GA after he has already accepted their presence.

#### The "opt-in" cookie

Well ... it is still named "test-opt-in" because after all these GA settings is more a proof of concept than anything else due to the nature of this site 🤔
We saw in [Part-1](/gatsby-gdpr-compliance-part1/) that if it was set it would allow GTM to proceed with the execution of the GA Tag. I guess we should let the user the opportunity to set it so that we could at least see if someone wishes to let us know that he has been there. But how do we do that?



## The useCookie hook

I have installed [React-Cookie](https://www.npmjs.com/package/react-cookie) to help me with dealing with cookies.
I have found this library rather convenient as it provides many ways to interact with the cookies one of which being a simple hook: useCookie.

## The useGdpr

I have chosen to encapsulate the logic of our cookie manipulations in a custom hook. It will allow us, in our components to set or reset the preferences of the users regarding their privacy.

```javascript
// useGdpr
export  function useGdpr(initialPreferences) {

    const [cookies, setCookie, removeCookie] = useCookies()

    const [storedPreferences, setStoredPreferences] = useState( () => {
        console.log('pref cookies', cookies["ga-pref-set"])
        return {
            rememberPreferences : cookies["ga-pref-set"] !== undefined,
            gaEnabled: cookies["ga-pref-set"]  === "allow-ga"
        }
    })

  const setPreferences = pref => {
      try {
          if (!pref.rememberPreferences) {
            removeCookie("_ga");
            removeCookie("test-opt-in");
            removeCookie('ga-pref-set');
            setStoredPreferences({
                rememberPreferences: false
            })
          }
          else 
          {
            if (pref.gaEnabled) {
                setCookie("test-opt-in", true);
                setCookie("ga-pref-set", "allow-ga");
                setStoredPreferences({
                    gaEnabled: true,
                    rememberPreferences: true
                })
            } else {
                removeCookie("test-opt-in");
                removeCookie("_ga");
                setCookie("ga-pref-set", "forbid-ga");
                setStoredPreferences({
                    gaEnabled: false,
                    rememberPreferences: true
                })
            }
          }          
      } catch (error) {
          console.log('error while setting preferences', error)
      }
  }
    return [storedPreferences, setPreferences];
}
```
I am making his hook's functions available to all my components through the context so that I can call them in a modal as well as on the privacy policy page.

I hope these two articles gave someone some help on how to achieve Gdpr compliance on a react based site.
