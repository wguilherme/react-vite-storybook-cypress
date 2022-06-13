import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import { useContext } from 'react'
import {Layout} from './components/template';
import {Dashboard,Task, Signup, Signin, Charts, Graphql, Project, Goal, Mvp} from './pages';
import {  } from "./pages/Graphql";


import { LoggedUserContext } from './contexts/User'


function App() {
  const { authenticated } = useContext(LoggedUserContext)
  console.log('is user authenticated', authenticated)
  return (
    <BrowserRouter>
      {!authenticated ? (
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      )
        : (<Routes>
          <Route element={<Layout> <Outlet /> </Layout>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task" element={<Task />} />
            <Route path="/project" element={<Project />} />
            <Route path="/goal" element={<Goal />} />
            <Route path="/mvp" element={<Mvp />} />
            <Route path="/graphql" element={<Graphql />} />
            <Route path="/charts" element={<Charts />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>)
      }

    </BrowserRouter>
  )
}

export default App
