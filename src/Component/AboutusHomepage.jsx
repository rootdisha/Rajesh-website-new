import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-indigo-50 py-20 px-6 overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-[#5944E4]/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#5944E4]/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"
      />

      <div className="relative max-w-5xl mx-auto z-10 text-center md:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          About <span className="text-[#5944E4]">Me</span>
        </motion.h2>

        {/* Paragraphs with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6"
          >
            I am passionate about defining product vision and building high-performance teams to solve complex problems. Radical responsibility and full ownership guide my work, while clear communication and consistent execution ensure projects succeed.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6"
          >
            I believe technology can address urgent societal challenges—from education to urban innovation. I also mentor and support initiatives that create meaningful impact in communities.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-gray-800 text-lg md:text-xl leading-relaxed"
          >
            My focus is on crafting elegant solutions, seamless user experiences, and scalable digital products that leave a lasting impact.
          </motion.p>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 mx-auto md:mx-0 w-32 h-1 bg-gradient-to-r from-[#5944E4] to-purple-500 rounded-full origin-left"
        />
      </div>
    </section>
  );
}
