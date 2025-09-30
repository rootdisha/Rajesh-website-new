import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section: Info */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white">Rajesh Chandran</h3>
          
          <div className="flex flex-col gap-2 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>rajesh@theproductartisan.com</span>
            </div>            
          </div>
        </motion.div>

        {/* Right Section: Quick Links */}
        <motion.div
          className="flex flex-col md:items-end gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* <div className="flex flex-col gap-2 text-gray-400">
  <a href="/" className="hover:text-white transition">Home</a>
  <a href="/aboutus" className="hover:text-white transition">About</a>
  <a href="/services" className="hover:text-white transition">Services</a>
  <a href="/contactus" className="hover:text-white transition">Contact</a>
</div> */}

          <p className="text-gray-500 mt-6 text-sm">
            © 2025 Developed by <span className="text-[#5944E4] font-semibold">Disha Medias</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
