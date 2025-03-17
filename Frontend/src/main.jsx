import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
