import { createContext, useState, useEffect } from 'react'

export const LoggedUserContext: any = createContext(LoggedUserProvider)

export function LoggedUserProvider(props: any) {
  const [loggedUser, setLoggedUser] = useState<any>(null)
  const [authenticated, setAuthenticated] = useState<any>(null)
  // todo set refresh user data

  useEffect(() => {
    function fetchLoggedUser() {
      // const user: any = true // simulating request

      setAuthenticated(true)
    }
    fetchLoggedUser()
  }, [])

  return (
    <LoggedUserContext.Provider value={{ loggedUser, authenticated }}>
      {props.children}
    </LoggedUserContext.Provider>
  )
}
