import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import { useContext } from 'react'

import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import Project from './pages/Project';
import Goal from './pages/Goal';
import Mvp from './pages/Mvp';
import {Layout} from './components/template';
import Login from './pages/Login';
import Signup from './pages/Signup';


import { LoggedUserContext } from './contexts/User'


function App() {
  const { authenticated } = useContext(LoggedUserContext)
  console.log('is user authenticated', authenticated)
  return (
    <BrowserRouter>
      {!authenticated ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )
        : (<Routes>
          <Route element={<Layout> <Outlet /> </Layout>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task" element={<Task />} />
            <Route path="/project" element={<Project />} />
            <Route path="/goal" element={<Goal />} />
            <Route path="/mvp" element={<Mvp />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>)
      }

    </BrowserRouter>
  )
}

export default App
