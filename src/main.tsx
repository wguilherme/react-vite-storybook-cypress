
// font for @mui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { deepPurple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import UserList from './pages/users'
import {QueryClient, QueryClientProvider} from 'react-query'

const theme: any = createTheme({
  palette: {
    // mode: 'dark',
    primary: deepPurple
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

const queryClient = new QueryClient
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/users" element={<UserList/>}/>
      </Routes>
    </ThemeProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
