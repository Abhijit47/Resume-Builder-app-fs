import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'materialize-css/dist/css/materialize.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
