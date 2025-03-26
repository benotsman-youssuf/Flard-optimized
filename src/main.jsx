import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
      <RouterProvider router={router} />
    </Provider>
)