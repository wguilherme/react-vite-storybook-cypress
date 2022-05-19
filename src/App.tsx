import { useEffect, useState } from 'react'

// interface Todo  {
//   description: string
//   completed: boolean
// }

function App() {
  const [todo, setTodo]= useState(null)
  useEffect(()=>{
    fetch('http://localhost:3000/api/todos')
    .then(res=>res.json())
    .then(data=>console.log('get',data))

  },[])
  return(
    <h1>Routes</h1>
  )
 
}

export default App
