import React from "react";
import { motion } from "framer-motion";
import b2bImg from "../Images/saas-concept-collage.jpg";
import analyticsImg from "../Images/representation-user-experience-interface-design.jpg";
import customerJourneyImg from "../Images/5618120.jpg";

const expertiseData = [
  { img: b2bImg, title: "B2B, XaaS / SaaS" },
  { img: analyticsImg, title: "Insights & Analytics, Platforms" },
  { img: customerJourneyImg, title: "Customer Journey(s) & Adoption Lifecycle" },
];

const Expertise = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-indigo-50 py-24 px-6 overflow-hidden">
      {/* Background Animated Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-[#5944E4]/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl shadow-2xl p-6 md:w-72 cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{
                transform: `rotate(${index === 0 ? "-2deg" : index === 2 ? "2deg" : "0deg"})`,
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#5944E4] mb-2">{item.title}</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-[#5944E4] to-purple-500 rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
