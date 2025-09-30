import React from "react";
import { motion } from "framer-motion";
import { Target, Users } from "lucide-react";

const productPrinciples = [
  "Build lasting products that matter",
  "Fuse impact, value, and empathy",
  "Design holistically for the full customer journey",
  "Align customer insight with purposeful execution",
  "Empathize in design, deliver with impact, and grow with intent",
];

const leadershipPrinciples = [
  "Seek what’s right — outcomes over pride",
  "Balance the percentages — do, listen, and learn",
  "Be specific and accountable — honest reflection drives growth",
  "Foster collaboration, embrace diversity, and share success",
  "Invest in talent — development and upskilling build teams that last",
];

export default function Principles() {
  const fadeParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      // ✅ Put your image in public/images/4864.jpg so this works
      className="bg-[url('/images/4864.jpg')] bg-cover bg-center py-20 px-6 w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeParent}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12"
      >
        {/* Product Principles */}
        <motion.div
          variants={fadeChild}
          className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-[#5944e4]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Product Principles
            </h2>
          </div>
          <motion.ul variants={fadeParent} className="space-y-5">
            {productPrinciples.map((p, i) => (
              <motion.li
                key={i}
                variants={fadeChild}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-[#5944e4] flex-shrink-0" />
                <p>{p}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Leadership Principles */}
        <motion.div
          variants={fadeChild}
          className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-[#5944e4]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Leadership Principles
            </h2>
          </div>
          <motion.ul variants={fadeParent} className="space-y-5">
            {leadershipPrinciples.map((p, i) => (
              <motion.li
                key={i}
                variants={fadeChild}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-[#5944e4] flex-shrink-0" />
                <p>{p}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
