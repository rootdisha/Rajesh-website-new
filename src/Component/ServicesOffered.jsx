import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Mic, Calendar, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesOffered() {
  return (
    <section className="bg-gradient-to-br from-[#f6f5ff] via-[#edeaff] to-[#e1ddff] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Services Offered
        </motion.h2>

        <div className="space-y-12">
          {/* 1. Leadership Coaching */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow p-8 border-l-[1rem] border-b-[1rem] border-[#5944e4]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-7 h-7 text-[#5944e4]" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Leadership Coaching – Nurturing Future Leaders
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I work with product leaders and senior executives to sharpen
              strategic clarity, elevate influence across the C-suite, and
              deliver measurable business outcomes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Distill complexity into clear decisions that move the business forward.</li>
              <li>Strengthen executive presence to build trust with peers and boards.</li>
              <li>Architect product strategies and teams that scale with resilience.</li>
              <li>Expand impact and lead confidently in high-stakes environments.</li>
            </ul>
          </motion.div>

          {/* 2. Product Advisory */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow p-8 border-l-[1rem] border-b-[1rem] border-[#5944e4]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-7 h-7 text-[#5944e4]" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Product Advisory – Unlock Your Next Phase of Growth
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nearly two decades of building products for Fortune 500 companies
              and high-growth startups—turning bold visions into market-winning
              propositions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Guide enterprises to modernize and scale with emerging tech.</li>
              <li>Help founders achieve product–market fit and rapid adoption.</li>
              <li>Design pricing and monetization models for sustainable profit.</li>
              <li>Build and lead high-performance product teams.</li>
            </ul>
          </motion.div>

          {/* 3. Product Talks & Webinars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow p-8 border-l-[1rem] border-b-[1rem] border-[#5944e4]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-7 h-7 text-[#5944e4]" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Product Talks & Webinars – The Real Highs & Lows
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Real stories and tactical insights from years of launching new
              platforms, scaling teams, and building AI/ML-driven solutions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>No fluff—just the trade-offs and lessons that matter.</li>
              <li>Actionable takeaways ready to implement.</li>
              <li>Cross-functional insights from product to AI/ML strategy.</li>
              <li>Tailored sessions for leadership teams or conference audiences.</li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-800 text-lg mb-6 font-medium">
              Ready to collaborate or book a consultation?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5944e4] text-white px-6 py-3 rounded-full hover:bg-[#4734c4] transition"
              >
                <Calendar className="w-5 h-5" /> Book on Calendly
              </a>
              <a
                href="mailto:rajesh@theproductartisan.com"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
              >
                <Mail className="w-5 h-5" /> Email Rajesh
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
