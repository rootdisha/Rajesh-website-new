import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "AboutUs", "Services", "ContactUS"];

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 70 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 70 } },
  };

  // Helper to handle smooth scroll to top
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* White glassy background */}
      <div className="backdrop-blur-md bg-white/90 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide"
            whileHover={{ scale: 1.08 }}
          >
            Rajesh Chandran
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <motion.a
                key={link}
                href={link === "Home" ? "/" : `${link.toLowerCase()}`}
                onClick={
                  link === "Home"
                    ? handleHomeClick
                    : () => setOpen(false)
                }
                className="relative text-gray-700 hover:text-blue-600 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Talk
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileDrawer"
            className="fixed top-0 right-0 h-screen w-64 bg-white p-6 md:hidden flex flex-col space-y-6 shadow-lg"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={link === "Home" ? "/" : `${link.toLowerCase()}`}
                onClick={
                  link === "Home"
                    ? handleHomeClick
                    : () => setOpen(false)
                }
                className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
