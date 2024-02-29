import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestInputContainer from './containers/test-input-container';
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";

import "./assets/demo/demo.css";
import RegistrationContainer from './containers/app-container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RegistrationContainer />
);


