import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sampleImg from "../Images/ChatGPT_Image_Aug_11__2025__05_27_45_PM-removebg-preview.png";
import Expertise from "./Expertise";

export default function AboutUsPreview() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4">
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
            Building high-performing teams & breakthrough products that truly matter
          </h2>

          <p className="text-gray-700 leading-relaxed">
            My passion has always been about creating ingenious products that are impactful 
            and help enterprises realize their business objectives, as well as enable startups 
            to scale confidently. Execution is crucial, and this is where I thrive—mentoring 
            and building teams that understand and respond to ownership, accountability, and 
            partnerships, converging on bold ideas and disciplined implementation.
          </p>

          {/* Read More Button */}
          <a
            href="/About_Me"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Read More
            <ArrowRight className="w-5 h-5" />
          </a>
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
            alt="Rajesh Chandran headshot"
            className="relative w-full md:w-3/5 rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* Expertise Component */}
      <div className="mt-16">
        <Expertise />
      </div>
    </section>
  );
}