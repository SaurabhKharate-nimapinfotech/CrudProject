import { useState } from 'react'
import './App.css'
import Table from './components/Table';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './components/Add';


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:<Table/>
  },
  {
    path: "add",
    element:<Add/>
  },
]);
  
  return (
   <>
      <RouterProvider router={router}/>
   </>
  )
}

export default App
