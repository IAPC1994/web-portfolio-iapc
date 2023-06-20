import React from 'react'
import ReactDOM from 'react-dom/client'
import WebPortfolio from './WebPortfolio.tsx'
import { UIProvider } from './context/ui/UIProvider.tsx'
import { DarkMode, Navbar } from './components/index.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UIProvider>
      <Navbar />
      <DarkMode />
      <WebPortfolio />
    </UIProvider>
  </React.StrictMode>,
)
