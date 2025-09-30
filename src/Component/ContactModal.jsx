import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Send, CheckCircle } from 'lucide-react';
import { web3formKey } from '../Data/constants';

const ContactModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formKey, // rajesh@theproductartisan.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus(null);
          setIsOpen(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        Have questions or want to collaborate? Fill out the form or reach us directly via phone or email. We'll respond as soon as we can.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 text-[#cfe444] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <a
                          href="mailto:rajesh@theproductartisan.com"
                          className="text-gray-900 hover:text-purple-600 transition-colors"
                        >
                          rajesh@theproductartisan.com
                        </a>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="hidden md:block mt-8">
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-[#cfe444]/20">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-purple-600">Quick response:</span> We typically respond within 24-48 hours during business days.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Form */}
                  <div className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cfe444] focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cfe444] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cfe444] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        isSubmitting || !formData.name || !formData.email || !formData.message
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Response Time Note */}
                    <p className="text-sm text-gray-500 text-center">
                      Expect a response within 24-48 hours.
                    </p>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <p className="text-green-800 text-sm">
                          Thank you! Your message has been sent successfully.
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4"
                      >
                        <p className="text-red-800 text-sm">
                          Oops! Something went wrong. Please try again or email us directly.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;