import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx'
import SignUp from './routes/Signup.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import LandingPage from './routes/LandingPage.jsx'
import Calculator from './routes/Calculator.jsx'
import Extract from './routes/Extract.jsx'
import Goals from './routes/Goals.jsx'
import { ContextProvider } from './context/Context.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/extract",
        element: <Extract />
      },
      {
        path: "/Goals",
        element: <Goals />
      },
      {
        path: "/Calculator",
        element: <Calculator />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
