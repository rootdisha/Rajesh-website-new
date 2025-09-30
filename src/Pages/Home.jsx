import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutUs'
import Contact from '../Component/ContactUs'
import BlogPreview from '../Component/BlogPreview'
import PodcastPreview from '../Component/PodcastPreview'

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
      <PodcastPreview />

      <Contact />
    </div>
  )
}

export default Home
