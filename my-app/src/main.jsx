// filepath: src/main.jsx
import './i18n'; // Импортируйте i18n перед App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/jost'; // Defaults to weight 400
// Optional:
// import '@fontsource/jost/500.css';
// import '@fontsource/jost/700.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)