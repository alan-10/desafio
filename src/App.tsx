import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import Main from './pages/Main';

import userPersistState from './utils/UserPersistState';
import { ContextProvider } from './Context/AuthContext'

function App() {

  const [theme, setTheme] = userPersistState('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ContextProvider>
    <ThemeProvider theme={theme}>
      <div className="App">
       <GlobalStyle />
        <Header  toggleTheme={toggleTheme }/>
      
      </div>
      <Main />
    </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
