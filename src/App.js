import { Fragment } from 'react';
import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Root from 'pages/Root';

function App() {
  return (
    <Fragment>
			<ThemeProvider theme={theme}>
        <div>
          <Root></Root>
        </div>
      </ThemeProvider>
		</Fragment>
  );
}

export default App;