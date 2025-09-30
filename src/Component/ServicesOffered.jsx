import React from "react";
import { motion } from "framer-motion";
import AA from "../Images/leader-authority-boss-coach-director-manager-concept.jpg";
import AB from "../Images/people-office-analyzing-checking-finance-graphs.jpg";
import AC from "../Images/man-sitting-living-room-home-guy-enjoying-studying-using-laptop-headset.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesOffered() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
      <h1 className="flex items-center text-3xl md:text-4xl font-semibold text-gray-900 pt-20">
        <span className="w-16 h-1 bg-[#5944e4] mr-4 rounded "></span>
        Services Offered
      </h1>

      {/* 1. Leadership Coaching */}
      <motion.div
        className="flex flex-col md:flex-row gap-12 items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={AA}
          alt="Leadership Coaching"
          className="md:w-1/2 w-full rounded-xl shadow-md object-cover"
        />
        <div className="md:w-1/2 space-y-4 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5944e4]">
            Leadership Coaching – Nurturing Future Leaders for Lasting Impact
          </h2>
          <p>
          I partner with product leaders and senior executives to sharpen strategy, elevate influence across the C-suite, and deliver measurable outcomes. With experience alongside Fortune 500s, high-growth startups, and CxOs driving transformation, I understand the pressures of scale, innovation, and execution.
          </p>
          <p>Through coaching, I help you:</p>
          <ul className="list-disc list-inside">
            <li>Turn complexity into clear, forward-moving decisions</li>
            <li>
            Strengthen executive presence to build trust and alignment.
            </li>
            <li>
            Design product strategies and teams that scale with speed and resilience
            </li>
            <li>
            Expand your influence, drive progress, and lead with confidence—I’ll help you get there with precision.

            </li>
          </ul>
          <p className="font-medium">
            Take the next step.  
            {/* Book your consultation */}
            <div className="text-center mt-12 space-y-4">
            <a
              href="https://calendly.com/consultthales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#cfe444] bg-[#cfe444] text-purple-600 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors"
            >
              Book your consultation
            </a>
          </div>
          </p>
        </div>
      </motion.div>

      {/* 2. Product Advisory */}
      <motion.div
        className="flex flex-col md:flex-row-reverse gap-12 items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={AB}
          alt="Product Advisory"
          className="md:w-1/2 w-full rounded-xl shadow-md object-cover"
        />
        <div className="md:w-1/2 space-y-4 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5944e4]">
          Product Advisory – Unlock Your Next Phase of Growth
          </h2>
          <p>
          Rajesh has nearly two decades of experience and has built and scaled products for Fortune 500 companies and high-growth startups—turning bold visions into market-winning propositions across AI, automation, customer care, and conversational commerce.
          </p>
          <p>He has:</p>
          <ul className="list-disc list-inside">
            <li>Steered enterprises to renovate with emerging tech</li>
            <li>Helped founders achieve product–market fit and swift growth</li>
            <li>Designed monetization models for workable viability</li>
            <li>Built high-performing teams that perform at scale</li>
          </ul>
          <p>
          Rajesh now works selectively with founders and leadership teams to achieve product–market fit, expand into new markets, and scale globally.
          </p>
          <p>
          Limited slots available each quarter. 
          <div className="text-center mt-12 space-y-4">

        {/* Book your consultation */}
        <a
          href="https://calendly.com/consultthales"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#cfe444] bg-[#cfe444] text-purple-600 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors"
        >
          Book your consultation
        </a>
        </div>
          </p>
        </div>
      </motion.div>

      {/* 3. Product Talks & Webinars */}
      <motion.div
        className="flex flex-col md:flex-row gap-12 items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={AC}
          alt="Product Talks & Webinars"
          className="md:w-1/2 w-full rounded-xl shadow-md object-cover"
        />
        <div className="md:w-1/2 space-y-4 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5944e4]">
          Product Talks & Webinars – Behind the Highs & Lows of Product Building
          </h2>
          <p>
          I share lessons from leading products at high-growth tech companies—launching platforms, scaling teams, and building AI/ML-driven enterprise solutions.
          </p>
          <p>What I bring:</p>
          <ul className="list-disc list-inside">
            <li>True experience and encounters—prioritisation, slipups, and what worked from 0→1 to 1→100</li>
            <li>Strategic takeaways—outlines, choices, and leadership lessons you can apply immediately</li>
            <li>Cross-functional insight—spanning product strategy, AI/ML, platforms, and collaboration across UX, engineering, and business</li>
            <li>Tailored sessions—for leadership teams, product orgs, or large conference audiences</li>
          </ul>
          <p>
          If you want a speaker who values substance over hype, let’s connect.
          </p>
        </div>
        
      </motion.div>
      <div className="text-center mt-12 space-y-4">
      {/* Book your consultation */}
      <a
        href="https://calendly.com/consultthales"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-[#cfe444] bg-[#cfe444] text-purple-600 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors"
      >
        Book your consultation
      </a>

      {/* Contact me */}
      <a
        href="mailto:rajesh@theproductartisan.com"
        className="inline-block border border-[#cfe444] text-gray-700 px-6 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors ml-4"
      >
        Contact me
      </a>
    </div>
    </section>
  );
}
