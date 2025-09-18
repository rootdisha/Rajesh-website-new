import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutusHomepage'
import Expertise from '../Component/Expertise'
import RecentPosts from '../Component/RecentPosts'
import Contact from '../Component/Contact'
import Principles from '../Component/Principles'
import ProductArtisanPodcastIntro from '../Component/ProductArtisanPodcastIntro'
import ServicesOffered from '../Component/ServicesOffered'

const Home = () => {
  return (
    <div>
        <Hero />
    <AboutUs />
    <Principles />
    <Expertise />
    <RecentPosts />
    <ProductArtisanPodcastIntro />
    <ServicesOffered />
    <Contact />
    </div>
  )
}

export default Home