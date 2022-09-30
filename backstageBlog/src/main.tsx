import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  <React.StrictMode>
     <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>
)
