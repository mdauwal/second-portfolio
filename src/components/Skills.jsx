// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 'Expert', icon: '🔥' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'React.js', level: 'Proficient', icon: '⚛️' },
  { name: 'JavaScript', level: 'Advanced', icon: '🚀' },
  { name: 'TypeScript', level: 'Intermediate', icon: '🔧' },
  { name: 'sCrypt', level: 'Beginner', icon: '🔐' },
  { name: 'Tailwind CSS', level: 'Proficient', icon: '💨' },
  { name: 'Firebase', level: 'Intermediate', icon: '🔥' },
  { name: 'Redux', level: 'Intermediate', icon: '🔄' },
  { name: 'Git/GitHub', level: 'Advanced', icon: '🐙' },
  { name: 'API Integration', level: 'Proficient', icon: '🔌' },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0e0e0e] text-white py-16 px-8 min-h-screen"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Skills & Expertise
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I constantly sharpen my skills and stay updated with the latest technologies. Here's what I bring to the table:
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-2xl font-semibold group-hover:text-red-500">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-300">
                Level: <span className="font-semibold">{skill.level}</span>
              </p>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500 opacity-0 group-hover:opacity-20 transition-opacity"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
