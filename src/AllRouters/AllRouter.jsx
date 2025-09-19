import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ServicesOffered from "../Component/ServicesOffered"
import AboutUs from "../Component/AboutUs"
import ContactUs from '../Component/ContactUs'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<ServicesOffered />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />

        </Routes>
    </div>
  )
}

export default AllRouter