import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContextProvider from './components/Context/Context.tsx'
import './index.scss'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider  >
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
