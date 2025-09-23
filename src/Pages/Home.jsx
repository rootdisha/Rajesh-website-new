import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutUs'
import Expertise from '../Component/Expertise'
import RecentPosts from '../Component/RecentPosts'
import Contact from '../Component/ContactUs'
import Principles from '../Component/Principles'
import ProductArtisanPodcastIntro from '../Component/ProductArtisanPodcastIntro'
// import ServicesOffered from '../Component/ServicesOffered'

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      {/* AboutUs Section */}
      <AboutUs />

      {/* Two-column layout: Principles + Sticky RecentPosts */}
      <section className=" mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        {/* Left Column: Principles */}
        <div className="flex-4">
          <Principles />
        </div>

        {/* Right Column: Sticky RecentPosts */}
        <div className="flex-2">
          <div className="sticky top-24">
            <RecentPosts />
          </div>
        </div>
      </section>

      <Expertise />
      <ProductArtisanPodcastIntro />
      {/* <ServicesOffered /> */}
      <Contact />
    </div>
  )
}

export default Home
