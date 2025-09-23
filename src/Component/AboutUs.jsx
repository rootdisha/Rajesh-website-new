import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../Images/ChatGPT_Image_Aug_11__2025__05_27_45_PM-removebg-preview.png";

export default function EssaysSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4 pt-31">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
            <span className="uppercase tracking-widest text-sm text-purple-700 font-semibold">
              About Me
            </span>
          </div>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Building high-performing teams and breakthrough products that truly matter
            </h2>

          <p className="text-gray-700 leading-relaxed">
            I’m passionate about creating products that truly make an impact —whether that’s helping
enterprises achieve their business goals or enabling startups to scale. I love building teams
that thrive on ownership, accountability, and collaboration, and I believe the best results
come from pairing new ideas with consistent execution.
          </p>

          <p className="text-gray-700 leading-relaxed">
           I also care deeply about how technology can drive change beyond business. Over the years,
I’ve had the privilege of mentoring social startups tackling challenges like digital literacy, 
social fundraising &amp; urban sanitation—initiatives that are improving lives in meaningful ways.
          </p>

        </motion.div>

        {/* Right Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Accent block behind the image */}
          <div className="absolute -top-8 -right-8 w-3/4 h-3/4 bg-purple-200 rounded-3xl rotate-6 hidden md:block"></div>

          <img
            src={sampleImg}
            alt="Essays Illustration"
            className="relative w-full md:w-3/5 rounded-2xl  object-cover"
          />
        </motion.div>
      </div>

      {/* Bottom Essays Text */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">Essays</h3> */}
        <p className="text-gray-700 leading-relaxed">
          With nearly two decades of leadership experience at Fortune 500 companies and emerging
ventures, I’ve had the chance to work with incredible people, breakthrough technologies, and
bold visions that shape the future.
        </p>
      </div>
    </section>
  );
}
