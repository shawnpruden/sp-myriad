import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import GlobalStyle from './styles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Fragment>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Fragment>
);
