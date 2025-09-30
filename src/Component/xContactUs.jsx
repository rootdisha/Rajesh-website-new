import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your backend/API call
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 mt-20 px-4 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left info panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Have questions or want to collaborate? Fill out the form or reach us
            directly via phone or email. We’ll respond as soon as we can.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" />
              <a href="mailto:rajesh@theproductartisan.com" className="text-gray-700">
                rajesh@theproductartisan.com
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <Phone className="text-purple-600" />
              <span className="text-gray-700">+91 99801 66997</span>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <MapPin className="text-purple-600" />
              <span className="text-gray-700">
                123 Creative Street, Chennai, India
              </span>
            </div> */}
          </div>
        </motion.div>

        {/* Right form panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>

          <div>
          Expect a response within 24-48 hours.
          </div>
        </motion.form>
      </div>
    </section>
  );
}
