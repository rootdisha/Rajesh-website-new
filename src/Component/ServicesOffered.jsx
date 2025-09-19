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
            1. Leadership Coaching - Nurturing future leaders for lasting impact
          </h2>
          <p>
            I work with product leaders and senior executives to sharpen strategic
            clarity, elevate influence across the C-suite, and deliver measurable
            business outcomes. Having partnered with Fortune 500 companies,
            high-growth startups, and CxOs navigating complex transformation, I
            understand the pressures of balancing scale, innovation, and execution.
          </p>
          <p>Through focused coaching, I help you:</p>
          <ul className="list-disc list-inside">
            <li>Distill complexity into clear decisions that move the business forward.</li>
            <li>
              Strengthen your executive presence to build trust and alignment with
              peers, boards, and customers.
            </li>
            <li>
              Architect product strategies and teams that scale with speed and resilience.
            </li>
            <li>
              If you’re ready to expand your impact, drive growth, and lead with confidence
              in high-stakes environments, I’ll help you get there with precision and clarity.
            </li>
          </ul>
          <p className="font-medium">
            Take the next step. Book your consultation call today
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
            2. Product Advisory - Unlock your next phase of growth
          </h2>
          <p>
            Rajesh is a proven product leader with nearly two decades of experience
            building &amp; shaping products for Fortune 500 companies and catalyzing
            high-growth startups in their scaling &amp; expansion growth phases. His
            work spans enterprise AI &amp; automation, intelligent customer care,
            conversational commerce — where he has consistently turned bold product
            vision into market-share winning propositions.
          </p>
          <p>Over his career, Rajesh has:</p>
          <ul className="list-disc list-inside">
            <li>Guided Fortune 500 enterprises to modernize and scale with emerging technologies</li>
            <li>Helped founders achieve product-market fit and unlock rapid market penetration</li>
            <li>Designed pricing and monetization models that drive sustainable profitability</li>
            <li>Built and led high-performance product teams that execute at speed and scale</li>
          </ul>
          <p>
            Rajesh now works selectively with founders and leadership teams who are preparing
            for their next stage of growth. Whether you’re aiming to secure product-market fit,
            expand into new markets, or take your product global, his tailored 1:1 advisory offers
            high-leverage insights that accelerate outcomes.
          </p>
          <p>
            Availability is limited to a small number of engagements each quarter to ensure focus
            and impact. <span className="font-bold">Book your consultation slot today.</span> 
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
            3. Product Talks &amp; Webinars - Behind highs &amp; lows of product building
          </h2>
          <p>
            I regularly share what I’ve learned over years leading product at high-growth
            tech companies — from launching new platforms, scaling product teams, to
            building AI/ML-driven enterprise solutions.
          </p>
          <p>I bring those insights into engaging talks and webinars, and here’s what I offer:</p>
          <ul className="list-disc list-inside">
            <li>Real stories, real challenges — no idealised theory. I talk about trade-offs, mistakes, and what actually worked when scaling from 0→1 and 1→100.</li>
            <li>Tactical takeaways — frameworks, decision-points, and leadership lessons that product executives, founders, and CxOs can use straight away.</li>
            <li>Cross-functional insight — I span product strategy, platform work, AI/ML, new tech incubation &amp; working with engineering, UX, business functions.</li>
            <li>Tailored sessions — whether for senior leadership, product teams, or larger audiences at conferences or workshops, I adapt to their context (industry, scale, markets).</li>
          </ul>
          <p>
            If your organisation is looking for a speaker who avoids hype, values substance,
            and focuses on how things really work — happy to collaborate. Book your consultation
            slot today.
          </p>
        </div>
        
      </motion.div>
      <div className="text-center mt-12 space-y-4">
      {/* Book your consultation */}
      <a
        href="https://calendly.com/your-calendly-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors"
      >
        Book your consultation
      </a>

      {/* Contact me */}
      <a
        href="mailto:rajesh@theproductartisan.com"
        className="inline-block border border-gray-700 text-gray-700 px-6 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors ml-4"
      >
        Contact me
      </a>
    </div>
    </section>
  );
}
