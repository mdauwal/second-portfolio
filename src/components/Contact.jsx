// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Message sent successfully!');
  };

  return (
    <section
      id="contact"
      className="bg-[#0e0e0e] text-white py-16 px-8 min-h-screen"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Interested in working with me or have any questions? Drop a message
          below!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2e2e2e] border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2e2e2e] border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none px-4 py-2 bg-[#2e2e2e] border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
