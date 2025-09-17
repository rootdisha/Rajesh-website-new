import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default AllRouter