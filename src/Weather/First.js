import React from 'react'
import Home from './Home'
import {BrowserRouter,Routes ,Route} from "react-router-dom"

function First() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default First