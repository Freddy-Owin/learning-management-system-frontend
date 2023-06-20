import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos';
import { Provider } from 'react-redux';
import store from './stores/stores';
import Routing from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing></Routing>
    </Provider>
    
  </React.StrictMode>
);

