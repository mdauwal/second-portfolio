import React from 'react';
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model'; // Ensure the correct import
import { motion, useAnimation } from 'framer-motion'; // Ensure Framer Motion is installed
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa'; // Social icons

const AnimatedText = ({ text }) => {
  const letters = text.split(''); // Split text into letters
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start('visible'); // Animate letters in
        await controls.start('hidden'); // Animate letters out
      }
    };
    sequence(); // Run the animation loop
  }, [controls]);

  // Animation variants for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Delay each letter's appearance
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight flex space-x-1"
      initial="hidden"
      animate={controls} // Use animation controls
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterAnimation} custom={index}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Header = () => {
  return (
    <header className="relative bg-[#0d0d0d] text-white min-h-screen flex items-center">
      {/* Left Section: Social Media Icons and Text Content */}
      <div className="container mx-auto px-6 lg:px-12 text-left relative z-10 flex flex-col space-y-6">
        {/* Social Media Icons */}
        <div className="flex space-x-4 md:space-x-6 mb-6 justify-center md:justify-start">
          <a
            href="https://github.com/mdauwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammd-analyst"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-300 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://stackoverflow.com/users/19690623/mdauwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-300 hover:text-white transition duration-300"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://twitter.com/MDTechSavvy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-300 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Text Content */}
        <AnimatedText text="I’m Muhammad" />
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Software Engineer | Web3 Enthusiast
        </motion.p>

        <motion.div
          className="space-x-4 md:space-x-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            className="bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 px-4 py-2 md:px-6 md:py-3 transition"
          >
            View My Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1dKwjojgIkM8aRa8zmHt6a2ogovLMsDam/view?usp=sharing"
            className="bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 px-4 py-2 md:px-6 md:py-3 transition"
          >
            My Resume
          </a>
        </motion.div>
      </div>

      {/* Right Section: 3D Model */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full hidden lg:block">
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 1, 10], fov: 75 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model />
        </Canvas>
      </div>

      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-transparent to-[#0d0d0d] opacity-30"></div>
    </header>
  );
};

export default Header;
