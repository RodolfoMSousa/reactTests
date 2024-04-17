import { Fragment } from 'react';
import './App.css';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Buttons from 'pages/Buttons';
import Text from 'pages/Typography'

function App() {
  return (
    <Fragment>
			<ThemeProvider theme={theme}>
        <CssBaseline >
        <Buttons></Buttons>
        <Text></Text>
        </CssBaseline>
      </ThemeProvider>
		</Fragment>
  );
}

export default App;