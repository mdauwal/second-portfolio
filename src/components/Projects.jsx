import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Importing the custom CSS file

const projects = [
  {
    title: 'Adroit Loan App',
    description: 'A financial app built with React, featuring loan tracking, sign-in, and sign-up modals.',
    tech: ['React', 'Tailwind CSS', 'Context API', 'DaisyUI'],
    link: 'https://adroit-loan-app.netlify.app/',
  },
  {
    title: 'Trackit',
    description: 'An app for monitoring vehicles carrying goods across Nigeria, built with React and Leaflet.',
    tech: ['React', 'Leaflet', 'TailwindCSS', 'Redux'],
    link: 'https://trackittitans.vercel.app/',
  },
  {
    title: 'Github Finder',
    description: 'A tool to search GitHub users and repositories using the GitHub API.',
    tech: ['React', 'GitHub API', 'TailwindCSS'],
    link: '#',
  },
  {
    title: 'Arewa Real Estate',
    description: 'A platform for listing and renting properties, featuring intuitive UI and blockchain integration.',
    tech: ['React', 'TailwindCSS', 'Solidity', 'Firebase'],
    link: '#',
  },
  {
    title: 'School Management System',
    description: 'A complete system for managing students, teachers, and classes efficiently.',
    tech: ['React', 'Firebase', 'CSS Modules'],
    link: 'https://school-management-system-three-alpha.vercel.app/',
  },
  {
    title: 'My First Portfolio',
    description: 'A minimal portfolio showcasing my early works as a frontend developer.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://mdauwal.github.io/First-Portfolio/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto text-center">
        <h2 className="projects-title">Recent Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">{tech}</span>
                ))}
              </div>

              {project.link.startsWith('http') ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  View Project
                </a>
              ) : (
                <Link to={project.link} className="view-project-btn">
                  View Project
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;