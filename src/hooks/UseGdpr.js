import { useCookies } from "react-cookie"
import {useState} from "react"

const cookieOPtions =  { path: "/", maxAge: 3600 *24 * 30 *13}

export  function useGdpr(initialPreferences) {

    const [cookies, setCookie, removeCookie] = useCookies()


    const [storedPreferences, setStoredPreferences] = useState( () => {
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
                setCookie("test-opt-in", true, cookieOPtions);
                setCookie("ga-pref-set", "allow-ga", cookieOPtions);
                setStoredPreferences({
                    gaEnabled: true,
                    rememberPreferences: true
                })
            } else {
                removeCookie("test-opt-in");
                removeCookie("_ga");
                setCookie("ga-pref-set", "forbid-ga", cookieOPtions);
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