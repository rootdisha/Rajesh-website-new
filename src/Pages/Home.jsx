import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutUs'
import Expertise from '../Component/Expertise'
import RecentPosts from '../Component/RecentPosts'
import { getNewestPosts } from '../Data/BlogDetail'
import Contact from '../Component/ContactUs'
import Principles from '../Component/Principles'
import ProductArtisanPodcastIntro from '../Component/ProductArtisanPodcastIntro'
import BlogPreview from '../Component/BlogPreview'
import PodcastPreview from '../Component/PodcastPreview'
// import ServicesOffered from '../Component/ServicesOffered'

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      {/* AboutUs Section */}
      <AboutUs />

      {/* Two-column layout: Principles + Sticky RecentPosts */}
      <section className=" mx-auto px-4 py-16 flex flex-row md:flex-col gap-12">
       
        {/* Right Column: Sticky RecentPosts */}
        <div className="flex-2">
          <div className="sticky top-24">
            <BlogPreview />
          </div>
        </div>
      </section>

      {/* Add newest 3 podcasts  */}
      {/* <ProductArtisanPodcastIntro /> */}
      <PodcastPreview />

      <Contact />
    </div>
  )
}

export default Home
