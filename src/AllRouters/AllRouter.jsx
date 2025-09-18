import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ServicesOffered from "../Component/ServicesOffered"

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<ServicesOffered />} />
        </Routes>
    </div>
  )
}

export default AllRouter