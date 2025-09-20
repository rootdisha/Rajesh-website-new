import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../Images/vintage-collage-frame-wallpaper-background-paper-texture-with-design-space.jpg"; // Replace with your image path

export default function EssaysSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
      {/* Left side - About / Latest Essay */}
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <div className="w-16 h-1 bg-[#5944e4] mr-4"></div>
          <span className="text-2xl tracking-wider">About Me</span>
        </div>

        {/* <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#5944e4] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building impactful products and teams while using technology to create meaningful change.
        </motion.h2> */}

        <motion.p
          className="text-gray-700 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
I’m passionate about creating products that truly make an impact —whether that’s helping
enterprises achieve their business goals or enabling startups to scale. I love building teams
that thrive on ownership, accountability, and collaboration, and I believe the best results
come from pairing new ideas with consistent execution.        </motion.p>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
I also care deeply about how technology can drive change beyond business. Over the years,
I’ve had the privilege of mentoring social startups tackling challenges like digital literacy, 
social fundraising &amp; urban sanitation—initiatives that are improving lives in meaningful ways.        </motion.p>
      </div>

      {/* Right side - Image + Essays description */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
        <motion.img
          src={sampleImg}
          alt="Essays Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="mt-4 w-full">
          <div className="h-24 w-2 bg-[#5944e4] mb-6"></div>
          {/* <h3 className="text-2xl font-bold mb-4">Essays</h3> */}
          <p className="text-gray-700 mb-6">
With nearly two decades of leadership experience at Fortune 500 companies and emerging
ventures, I’ve had the chance to work with incredible people, breakthrough technologies, and
bold visions that shape the future.          </p>
         <a
  href="/aboutus"
  className="border border-[#5944e4] text-[#5944e4] px-4 py-2 w-36 
             hover:bg-purple-50 transition inline-block text-center"
>
  Know More
</a>

        </div>
      </div>
    </section>
  );
}
