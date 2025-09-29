import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ServicesOffered from "../Component/ServicesOffered"
import AboutUs from "../Component/AboutUs"
import ContactUs from '../Component/ContactUs'
import ProductArtisanPodcastIntro from '../Component/ProductArtisanPodcastIntro'
import Episodes from '../Component/Podcast'
import BlogPage from '../Component/BlogPage'


const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services' element={<ServicesOffered />} />
            <Route path='/About_Me' element={<AboutUs />} />
            <Route path='/Contact_Me' element={<ContactUs />} />
            <Route path='/PodcastArtisanPodcast' element={<ProductArtisanPodcastIntro />} />
            <Route path='/Episodes' element={<Episodes />} />
            <Route path='/blog' element={<BlogPage />} />
        </Routes>
    </div>
  )
}

export default AllRouter