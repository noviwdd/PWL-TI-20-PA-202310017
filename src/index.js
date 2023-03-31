import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-datepicker/dist/react-datepicker.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import FormPersonalData from './components/pertemuan-2/FormPersonalData';
import Layouts from './components/pertemuan-3/layouts/Layouts';
import Home from './components/pertemuan-3/modules/components/Homes/Home';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/pertemuan-3/apps/AppRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
const {PUBLIC_URL} = process.env;
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
