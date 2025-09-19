import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Users,
  BarChart,
  Eye,
  TrendingUp,
  Compass,
  Layers,
  Target,
} from "lucide-react";

export default function ProductArtisanPodcastIntro() {
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#f5f4ff] via-[#e8e6ff] to-[#ddd9ff] py-20 px-6 md:px-12">
      {/* soft radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(89,68,228,0.12),transparent_60%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
        }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl pt-20 text-center mb-6 "
        >
          <span className="text-gray-800">The Product </span>
          <span className="text-[#5944e4]">Artisan Podcast</span>
        </motion.h2>

        {/* Intro text */}
        <motion.p
          variants={fadeIn}
          className="text-gray-700 text-lg md:text-xl text-center max-w-6xl mx-auto leading-relaxed"
        >
          Welcome to <strong>The Product Artisan</strong>—a podcast for those
          who build, scale, and lead products in the real world.  
          For operators, by operators.
        </motion.p>

        {/* <motion.p
          variants={fadeIn}
          className="mt-4 text-gray-700 text-lg md:text-xl text-center max-w-6xl mx-auto leading-relaxed"
        >
          Conversations with seasoned product leaders—no hype, no jargon.
          Just what works, what doesn’t, and most importantly, <em>why</em>.
        </motion.p> */}
        <motion.p
          variants={fadeIn}
          className="mt-4 text-gray-700 text-lg md:text-xl text-center max-w-6xl mx-auto leading-relaxed"
        >
          Each episode features conversations with seasoned operators and product leaders—people
who’ve been in the trenches and know what it takes to deliver impact. This isn’t about hype
or buzzwords. It’s about what actually works, what doesn’t, and more importantly WHY.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className="bg-white/80 rounded-3xl shadow-xl p-8 border border-[#5944e4]/10 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-[#5944e4] mb-6 text-center md:text-left">
              What to Expect
            </h3>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#5944e4]" />
                Stories from senior product executives, founders, and operators
              </li>
              <li className="flex items-start gap-3">
                <BarChart className="w-6 h-6 text-[#5944e4]" />
                Lessons on scaling teams, products, and markets
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-6 h-6 text-[#5944e4]" />
                Handling complexity, ambiguity, and trade-offs
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#5944e4]" />
                Trends that matter now—and what to watch next
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className="bg-white/80 rounded-3xl shadow-xl p-8 border border-[#5944e4]/10 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-[#5944e4] mb-6 text-center md:text-left">
              Why Listen?
            </h3>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <Compass className="w-6 h-6 text-[#5944e4]" />
                Insights from operators who’ve navigated 0→1 and 1→100 journeys
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#5944e4]" />
                Practical strategies you can apply right away
              </li>
              <li className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#5944e4]" />
                Understand the real, messy side of product management
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-6 h-6 text-[#5944e4]" />
                Inspiration from leaders balancing vision and execution
              </li>
            </ul>
            <p className="mt-6 text-gray-800 font-medium text-lg text-center md:text-left">
              Less noise. More substance. Honest conversations to sharpen your
              craft.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
