import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutusHomepage'
import Expertise from '../Component/Expertise'
import RecentPosts from '../Component/RecentPosts'
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
    <AboutUs />
    <Expertise />
    <RecentPosts />
    <Contact />
    </div>
  )
}

export default Home