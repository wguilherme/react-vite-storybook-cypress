import { useEffect } from 'react'
import { api } from './services/api'

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
