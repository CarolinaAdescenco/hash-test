import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/Global/index';
import Routes from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
