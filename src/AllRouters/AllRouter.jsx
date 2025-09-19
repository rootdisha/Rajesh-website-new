import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ServicesOffered from "../Component/ServicesOffered"
import AboutUs from "../Component/AboutUs"
import ContactUs from '../Component/ContactUs'
import ProductArtisanPodcastIntro from '../Component/ProductArtisanPodcastIntro'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<ServicesOffered />} />
            <Route path='/About_Us' element={<AboutUs />} />
            <Route path='/Contact_Us' element={<ContactUs />} />
            <Route path='/Podcast' element={<ProductArtisanPodcastIntro />} />

        </Routes>
    </div>
  )
}

export default AllRouter