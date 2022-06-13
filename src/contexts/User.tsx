import { createContext, useState, useEffect } from 'react'

export const LoggedUserContext: any = createContext(LoggedUserProvider)

export function LoggedUserProvider(props: any) {
  const [loggedUser, setLoggedUser] = useState<any>(null)
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  return (
    <LoggedUserContext.Provider value={{ loggedUser, authenticated, setAuthenticated }}>
      {props.children}
    </LoggedUserContext.Provider>
  )
}
