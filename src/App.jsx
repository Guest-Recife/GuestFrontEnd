import '../src/styles/main.css'

import { Register }  from './pages/register'

import {createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'
import { Login } from './pages/login'
import { Profile } from './pages/profile'
import { Restaurants } from './pages/restaurants'
import { Menu } from './pages/menu'
import { Offers } from './pages/offers'

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/restaurants",
    element: <Restaurants/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/offers",
    element: <Offers/>
  }

])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
