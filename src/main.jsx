import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound/index.jsx'
import Ayuda from './pages/Ayuda/index.jsx'
import Nosotros from './pages/Nosotros/index.jsx'
import Noticias from './pages/Noticias/index.jsx'
import Login from './pages/Login/index.jsx'
import Usuario from './pages/Usuario/index.jsx'
import LibroDetail from './pages/LibroDetail/index.jsx'
import Libros from './pages/Libros/index.jsx'
import Home from './pages/Home/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/libros', element: <Libros /> },
      { path: '/libros/:slug', element: <LibroDetail /> },
      { path: '/usuario', element: <Usuario /> },
      { path: '/login', element: <Login /> },
      { path: '/noticias', element: <Noticias /> },
      { path: '/nosotros', element: <Nosotros /> },
      { path: '/ayuda', element: <Ayuda /> },
    ]
  },
  { path: '*', element: <NotFound /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
