import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import App from './App'
import "./global.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
      <App />
    </Provider>
)