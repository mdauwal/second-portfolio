// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import muhammad from "../assets/muhammad.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0e0e0e] text-white py-16 px-8 min-h-screen flex items-center"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image or 3D Canvas Placeholder */}
        <motion.div
          className="relative w-full h-96 md:h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-purple-800 opacity-20 rounded-lg blur-xl"></div>
          <img
            src={muhammad}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg shadow-lg z-10"
          />
        </motion.div>

        {/* Right Section - About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Hello! I'm <span className="text-red-500 font-semibold">Muhammad Auwal</span>, 
            a passionate software developer with a love for building beautiful, 
            responsive, and user-friendly web applications. 
            I specialize in React.js, TypeScript, TailwindCSS and enjoy turning complex ideas into elegant solutions.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            With a background in design and development, I focus on crafting sleek UIs 
            and delivering exceptional user experiences. I'm always excited to learn 
            new technologies and collaborate on impactful projects.
          </p>

          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
