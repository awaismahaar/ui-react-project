import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
