import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from 'styles';

import App from 'App';

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
