import React from "react";
import { motion } from "framer-motion";
import AA from "../Images/vintage-collage-frame-wallpaper-background-paper-texture-with-design-space.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Leadership Coaching – Nurturing Future Leaders",
    intro:
      "I work with product leaders and senior executives to sharpen strategic clarity, elevate influence across the C-suite, and deliver measurable business outcomes.",
    bullets: [
      "Distill complexity into clear decisions that move the business forward.",
      "Strengthen executive presence to build trust with peers and boards.",
      "Architect product strategies and teams that scale with resilience.",
      "Expand impact and lead confidently in high-stakes environments.",
    ],
    img: AA,
  },
  {
    title: "Product Advisory – Unlock Your Next Phase of Growth",
    intro:
      "Nearly two decades of building products for Fortune 500 companies and high-growth startups—turning bold visions into market-winning propositions.",
    bullets: [
      "Guide enterprises to modernize and scale with emerging tech.",
      "Help founders achieve product–market fit and rapid adoption.",
      "Design pricing and monetization models for sustainable profit.",
      "Build and lead high-performance product teams.",
    ],
    img: AA,
  },
  {
    title: "Product Talks & Webinars – The Real Highs & Lows",
    intro:
      "Real stories and tactical insights from years of launching new platforms, scaling teams, and building AI/ML-driven solutions.",
    bullets: [
      "No fluff—just the trade-offs and lessons that matter.",
      "Actionable takeaways ready to implement.",
      "Cross-functional insights from product to AI/ML strategy.",
      "Tailored sessions for leadership teams or conference audiences.",
    ],
    img:AA,
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
    <h1 className="flex items-center text-3xl md:text-4xl font-semibold text-gray-900 mt-10">
  <span className="w-16 h-1 bg-[#5944e4] mr-4 rounded"></span>
  Services Offered
</h1>

      {services.map((svc, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row gap-12 items-center ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Column */}
          <motion.div
            className="md:w-1/2 relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-4 left-0 w-16 h-2 bg-[#5944e4] rounded" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#5944e4] mb-4">
              {svc.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{svc.intro}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {svc.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="md:w-1/2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={svc.img}
              alt={svc.title}
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </motion.div>
        </div>
      ))}

      {/* Call To Action */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-gray-800 mb-6">
          Ready to collaborate or book a consultation?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5944e4] text-[#5944e4] px-6 py-2 rounded hover:bg-[#5944e4] hover:text-white transition-colors"
          >
            Book on Calendly
          </a>
          <a
            href="mailto:rajesh@theproductartisan.com"
            className="border border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            Email Rajesh
          </a>
        </div>
      </motion.div>
    </section>
  );
}
