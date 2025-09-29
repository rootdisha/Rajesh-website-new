import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    // { name: "Home", to: "/" }, // Redundant - Nav Logo goes to /
    { name: "About Me", to: "/About_me" },
    { name: "Podcast", to: "/PodcastArtisanPodcast" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
    { name: "Contact Me", to: "/Contact_Me" },
  ];

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 70 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glassy top bar */}
      <div className="backdrop-blur-md bg-white/90 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide"
              onClick={() => setOpen(false)}
            >
              Rajesh Chandran
            </Link>
          </motion.div>

          {/* -------- Desktop Links -------- */}
          <div className="hidden md:flex space-x-8">
            {links.map((l) => (
              <motion.div key={l.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={l.to}
                  className="relative text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/About_me"
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </Link>
          </motion.div>

          {/* -------- Mobile Hamburger -------- */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* -------- Mobile Drawer -------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 h-screen w-64 bg-white p-6 flex flex-col space-y-6 shadow-lg md:hidden"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((l) => (
              <motion.div key={l.name} whileTap={{ scale: 0.95 }}>
                <Link
                  to={l.to}
                  className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}

            <motion.div className="mt-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/About_me"
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-700 transition"
                onClick={() => setOpen(false)}
              >
                Let’s Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
