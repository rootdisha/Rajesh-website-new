import React from "react";
import { motion } from "framer-motion";
import b2bImg from "../Images/saas-concept-collage.jpg";
import analyticsImg from "../Images/representation-user-experience-interface-design.jpg";
import customerJourneyImg from "../Images/5618120.jpg";

const expertiseData = [
  { img: b2bImg, title: "B2B, XaaS / SaaS", description: "Helping businesses scale with SaaS and XaaS solutions." },
  { img: analyticsImg, title: "Insights & Analytics", description: "Turning complex data into actionable insights." },
  { img: customerJourneyImg, title: "Customer Journey & Adoption", description: "Optimizing user experience and adoption lifecycles." },
];

const Expertise = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-indigo-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h2>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-6 cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#5944E4] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#5944E4] to-purple-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional Animated Background Circles */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#5944E4]/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-20 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};

export default Expertise;
