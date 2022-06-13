// font for @mui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { deepPurple, indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { LoggedUserProvider } from './contexts/User';
import { store } from './store';
import './styles/global.scss';
import { ApolloProvider } from "@apollo/client";

import client from "./services/apollo";

const theme: any = createTheme({
  palette: {
    // mode: 'dark',
    primary: indigo
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <LoggedUserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LoggedUserProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)