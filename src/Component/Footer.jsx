import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Footer = ({ setContactModalOpen }) => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6 overflow-hidden">
      {/* Background animated circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Left Section: Brand & Description */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white">Rajesh Chandran</h3>
          </motion.div>

          {/* Center Section: Contact */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="flex items-start gap-2 text-gray-400">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <a 
                href="mailto:rajesh@theproductartisan.com"
                className="hover:text-white transition-colors text-sm"
              >
                rajesh@theproductartisan.com
              </a>
            </div>
          </motion.div>

          {/* Right Section: CTA Button */}
          <motion.div
            className="flex flex-col gap-4 md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <button
              onClick={() => setContactModalOpen(true)}
              className="bg-[#cfe444] text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-[#bfd333] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Far Right Section: Quick Links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/About_Me" className="text-gray-400 hover:text-white transition-colors">
                About Me
              </a>
              <a href="/Services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="/PodcastArtisanPodcast" className="text-gray-400 hover:text-white transition-colors">
                Podcast
              </a>
              <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="/news" className="text-gray-400 hover:text-white transition-colors">
                In The News
              </a>
            </nav>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rajesh Chandran. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Developed by <span className="text-[#cfe444] font-semibold">Disha Medias</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;