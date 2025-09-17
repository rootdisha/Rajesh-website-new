import React from "react";
import { motion } from "framer-motion";
import contactImg from "../Images/ChatGPT_Image_Aug_11__2025__05_27_45_PM-removebg-preview.png"; // Replace with your image

const Contact = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-20 overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-[#5944E4]/20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Form */}
        <motion.div
          className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact Me
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
          </motion.p>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5944E4]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5944E4]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#5944E4] resize-none"
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <button
                type="submit"
                className="bg-[#5944E4] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#4633c2] hover:scale-105 transition transform duration-300"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-96 lg:h-[40rem] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Floating decorative circles */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-[#5944E4]/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 left-6 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/2 left-10 w-3 h-3 bg-indigo-400/30 rounded-full animate-bounce"
              style={{ animationDelay: "0.7s" }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
