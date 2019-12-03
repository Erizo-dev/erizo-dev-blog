import { useCookies } from "react-cookie"
import {useState} from "react"

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