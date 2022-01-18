import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Web3 from 'web3';
import { store } from './redux/store/store';
import PagesRoutes from './Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import './asset/Toast/ToastSyle.scss'

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <Router>
        <PagesRoutes />
      </Router>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
);

