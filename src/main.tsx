import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import UserList from './pages/users'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/users" element={<UserList/>}/>
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
