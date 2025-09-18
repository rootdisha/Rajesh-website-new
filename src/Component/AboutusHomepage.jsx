import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* Decorative Circle Accents */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 bg-[#5944e4]/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 bg-[#5944e4]/20 rounded-full blur-2xl"></div>

      <motion.div
        className="relative max-w-7xl mx-auto text-center bg-white/70 backdrop-blur-sm p-8 md:p-16 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl  tracking-tight text-gray-900 mb-8 tracking-wider">
          <span className="drop-shadow-sm text-gray-700">
            About <span className="text-[#5944e4]">Me</span>
          </span>
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            I’m passionate about creating products that truly make an impact—
            whether that’s helping enterprises achieve their business goals or
            enabling startups to scale. I love building teams that thrive on{" "}
            <span className="font-semibold text-[#5944e4]">
              ownership, accountability, and collaboration
            </span>, and I believe the best results come from pairing new ideas
            with consistent execution.
          </p>

          <p>
            I also care deeply about how technology can drive change beyond
            business. Over the years, I’ve had the privilege of mentoring social
            startups tackling challenges like{" "}
            <span className="font-semibold text-[#5944e4]">
              digital literacy, social fundraising &amp; urban sanitation
            </span>{" "}
            —initiatives that are improving lives in meaningful ways.
          </p>

          <p>
            With nearly two decades of leadership experience at Fortune&nbsp;500
            companies and emerging ventures, I’ve had the chance to work with
            incredible people, breakthrough technologies, and bold visions that
            shape the future.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
