import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Add from './components/Add'
import Update from './components/Update'
import Delete from './components/Delete'




function AppRouter() {
    return (
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/create' element={<Add/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
            <Route path='/delete/:id' element={<Delete/>}></Route>
           </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
