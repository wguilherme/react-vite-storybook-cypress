import { createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

// let server = createServer()
// server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

// let server = createServer()

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/todos', function(schema){
      return [{
        id: 1,
        description: 'Learn Mirage',
        completed: false
      }]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
