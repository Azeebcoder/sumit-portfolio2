import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contaxt/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
