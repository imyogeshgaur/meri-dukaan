import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Suspense fallback={<h1 className='mx-auto'>Loading...</h1>}>
    <App />
    </Suspense>
  </BrowserRouter>,
)
