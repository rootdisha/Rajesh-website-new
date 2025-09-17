import React from "react";
import { motion } from "framer-motion";

const educationData = [
  { degree: "Business Administration (MBA)", institution: "Virginia Tech University, USA" },
  { degree: "Post Graduate Program in Data Science & Business Analytics", institution: "University of Texas, Austin" },
  { degree: "Information Sciences (MS)", institution: "Ball State University, USA" },
  { degree: "Electrical Engineering (BE)", institution: "Madras University, India" },
];

const Profile = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Name & Role */}
        <motion.h1
          className="text-3xl md:text-4xl font-[logo] text-gray-900 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Rajesh Chandran
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Product and Technology Leader with strong B2B product strategy, GTM & technology incubation experience, creating high-performance teams.
        </motion.p>

        {/* Education Section */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/10 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
    