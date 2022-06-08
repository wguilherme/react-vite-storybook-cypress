import { useEffect } from 'react'
import { api } from './services/api'
import { makeServer } from './services/mirage'

if(process.env.NODE_ENV === 'development'){ makeServer() }

function App() {
  useEffect(()=>{
    api.get('http://localhost:3000/api/todos').then(response=>{
      console.log('response.data',response.data)
    })

  },[])
  return(
    <h1>Routes</h1>
  )
 
}

export default App
