import { React, ReactDOM, HelmetProvider, axios } from './imports.js';

import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import './index.css'

axios.defaults.baseURL = 'http://localhost:8080'; // Change this to server once we have one in production or import from .env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
