// import { useState } from 'react'
import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])
  return (
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
  )
}

export default App
