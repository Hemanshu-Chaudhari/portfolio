"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowRight,
  FaStar,
  FaCodeBranch,
  FaClock,
} from "react-icons/fa";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack Hotel Management System built with the MERN stack. Features include room browsing, booking system, admin panel for managing bookings, rooms, and customer data with real-time updates.",
    image: "/hotel-management.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Hemanshu-Chaudhari/hotel-management-system",
    live: "https://hotel-management-system-olive-beta.vercel.app/",
    stats: {
      stars: 12,
      forks: 3,
      updatedAt: "2 weeks ago"
    },
    featured: true,
  },
  {
    title: "Expense Sathi",
    description:
      "An AI-powered expense tracking application with smart categorization, spending pattern analysis, interactive dashboards, and personalized financial insights to help users make better financial decisions.",
    image: "/expense-sathi.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Hemanshu-Chaudhari/expense-sathi",
    live: "#",
    stats: {
      stars: 8,
      forks: 2,
      updatedAt: "1 month ago"
    },
    featured: false,
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-400 font-medium text-sm">Portfolio</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my best work with modern technologies and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <FaStar className="text-black" />
                    Featured
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="flex gap-4"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition flex items-center gap-2"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </motion.div>
                  </div>

                  {/* Tech Stack on Image */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-900/90 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-slate-900/90 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full border border-slate-700">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* GitHub Stats */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="text-gray-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-gray-400" />
                      <span>{project.stats.updatedAt}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all duration-300 flex-1 justify-center border border-slate-700 hover:border-slate-600"
                    >
                      <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                      <span>Source Code</span>
                      <FaArrowRight className="text-xs opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-xl transition-all duration-300 flex-1 justify-center shadow-lg hover:shadow-blue-500/25"
                    >
                      <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                      <span>Live Demo</span>
                      <FaArrowRight className="text-xs opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Hemanshu-Chaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-slate-900/50 border-2 border-slate-800 hover:border-blue-500/50 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80"
          >
            <FaGithub className="text-2xl group-hover:text-blue-400 transition-colors" />
            <span className="font-semibold">View All Projects on GitHub</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Project Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Projects", value: "10+", icon: "🚀" },
            { label: "Open Source", value: "5+", icon: "📚" },
            { label: "Technologies Used", value: "15+", icon: "⚡" },
            { label: "Active Development", value: "2024", icon: "💻" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;