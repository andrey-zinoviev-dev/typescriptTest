// import { useState } from 'react'
import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './hooks/hooks'


function App() {
  const login = useAppSelector((state) => {
    return state.login.loggedIn;
  });
  console.log(login)
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
