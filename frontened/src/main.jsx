import { React, ReactDOM, HelmetProvider, axios } from './imports.js';

import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import './index.css'
import { StoreProvider } from './Store.jsx';

axios.defaults.baseURL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://not-amazon.vercel.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider >
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
)
