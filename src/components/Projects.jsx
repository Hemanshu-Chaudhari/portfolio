"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaCodeBranch,
  FaClock,
  FaRobot,
  FaSearch,
  FaLock,
  FaStickyNote,
} from "react-icons/fa";

const projects = [
  // =====================================================
  // 1. AI NOTE-TAKING APP
  // =====================================================
  {
    title: "AI Note-Taking App",

    description:
      "A full-stack AI-powered note-taking platform that allows users to securely create, organize, search, update, and delete notes. It also provides AI-powered note summarization to help users quickly understand their content.",

    image: "/note.jpg",

    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI",
    ],

    features: [
      {
        icon: FaRobot,
        title: "AI Summarization",
        text: "Summarize notes with AI",
      },
      {
        icon: FaSearch,
        title: "Search",
        text: "Quickly find saved notes",
      },
      {
        icon: FaLock,
        title: "Authentication",
        text: "Secure JWT authentication",
      },
      {
        icon: FaStickyNote,
        title: "Note CRUD",
        text: "Create, edit and delete notes",
      },
    ],

    github:
      "https://github.com/Hemanshu-Chaudhari/ai-note-taking-app",

    live:
      "https://ai-note-taking-app-omega.vercel.app/register",

    stats: {
      stars: 0,
      forks: 0,
      updatedAt: "Recently updated",
    },

    featured: true,
  },

  // =====================================================
  // 2. HOTEL MANAGEMENT SYSTEM
  // =====================================================
  {
    title: "Hotel Management System",

    description:
      "A full-stack hotel management platform built with the MERN stack. Users can browse rooms and make bookings, while administrators can manage rooms, bookings, and customer information through the management system.",

    image: "/hotel-mangement.png",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      {
        icon: FaSearch,
        title: "Room Browsing",
        text: "Browse available rooms",
      },
      {
        icon: FaStickyNote,
        title: "Booking System",
        text: "Manage hotel bookings",
      },
      {
        icon: FaLock,
        title: "Admin Panel",
        text: "Manage rooms and users",
      },
    ],

    github:
      "https://github.com/Hemanshu-Chaudhari/hotel-management-system",

    live:
      "https://hotel-management-system-olive-beta.vercel.app/",

    stats: {
      stars: 12,
      forks: 3,
      updatedAt: "2 weeks ago",
    },

    featured: false,
  },

  // =====================================================
  // 3. EXPENSE SATHI
  // =====================================================
  {
    title: "Expense Sathi",

    description:
      "An AI-powered expense management application designed to help users track spending, understand financial patterns, and gain personalized insights through an interactive dashboard.",

    image: "/expense.png",

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      {
        icon: FaRobot,
        title: "AI Insights",
        text: "Personalized financial insights",
      },
      {
        icon: FaSearch,
        title: "Analytics",
        text: "Analyze spending patterns",
      },
      {
        icon: FaStickyNote,
        title: "Expense Tracking",
        text: "Track daily expenses",
      },
    ],

    github:
      "https://github.com/Hemanshu-Chaudhari/expense-sathi",

    live: "#",

    stats: {
      stars: 8,
      forks: 2,
      updatedAt: "1 month ago",
    },

    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND ELEMENTS
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          {/* Badge */}

          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >

            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />

            <span className="text-blue-400 font-medium text-sm">
              Portfolio
            </span>

          </motion.div>

          {/* Heading */}

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">

            Featured{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>

          </h2>

          {/* Description */}

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of full-stack applications built with modern
            technologies, AI capabilities, and scalable architectures.
          </p>

        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              className={`group relative ${
                index === 2
                  ? "lg:col-span-2 max-w-3xl mx-auto w-full"
                  : ""
              }`}
            >

              {/* =================================================
                  FEATURED BADGE
              ================================================= */}

              {project.featured && (

                <div className="absolute top-4 left-4 z-20">

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}

                    transition={{
                      delay: 0.5,
                    }}

                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
                  >

                    <FaStar />

                    Featured

                  </motion.div>

                </div>

              )}

              {/* =================================================
                  PROJECT CARD
              ================================================= */}

              <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/10">

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-full object-contain p-3 transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">

                    {project.live !== "#" && (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition flex items-center gap-2"
                      >

                        <FaExternalLinkAlt />

                        Live Demo

                      </a>

                    )}

                  </div>

                  {/* Tech Stack */}

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">

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

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-8">

                  {/* Title */}

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* =================================================
                      FEATURES
                  ================================================= */}

                  <div className="grid grid-cols-2 gap-3 mb-6">

                    {project.features.map((feature) => {

                      const FeatureIcon = feature.icon;

                      return (

                        <div
                          key={feature.title}
                          className="bg-slate-800/60 border border-slate-700/70 rounded-xl p-4 hover:border-blue-500/40 transition"
                        >

                          <FeatureIcon className="text-blue-400 text-lg mb-2" />

                          <h4 className="text-sm font-semibold text-white">
                            {feature.title}
                          </h4>

                          <p className="text-xs text-gray-500 mt-1">
                            {feature.text}
                          </p>

                        </div>

                      );

                    })}

                  </div>

                  {/* =================================================
                      GITHUB STATS
                  ================================================= */}

                  <div className="flex items-center gap-5 mb-6 text-sm text-gray-500">

                    <div className="flex items-center gap-1">

                      <FaStar className="text-yellow-500" />

                      <span>
                        {project.stats.stars}
                      </span>

                    </div>

                    <div className="flex items-center gap-1">

                      <FaCodeBranch />

                      <span>
                        {project.stats.forks}
                      </span>

                    </div>

                    <div className="flex items-center gap-1">

                      <FaClock />

                      <span>
                        {project.stats.updatedAt}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      TECHNOLOGY TAGS
                  ================================================= */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* =================================================
                      ACTION BUTTONS
                  ================================================= */}

                  <div className="flex gap-4">

                    {/* GitHub */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all duration-300 flex-1 justify-center border border-slate-700 hover:border-slate-600"
                    >

                      <FaGithub className="group-hover/btn:scale-110 transition-transform" />

                      <span>
                        Source Code
                      </span>

                      <FaArrowRight className="text-xs opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />

                    </a>

                    {/* Live Demo */}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 flex-1 justify-center ${
                        project.live === "#"
                          ? "bg-slate-800/50 border border-slate-700 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25"
                      }`}
                      onClick={(e) => {
                        if (project.live === "#") {
                          e.preventDefault();
                        }
                      }}
                    >

                      <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />

                      <span>
                        Live Demo
                      </span>

                      {project.live !== "#" && (

                        <FaArrowRight className="text-xs opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />

                      )}

                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* =====================================================
            GITHUB BUTTON
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.6,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mt-16"
        >

          <a
            href="https://github.com/Hemanshu-Chaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-slate-900/50 border-2 border-slate-800 hover:border-blue-500/50 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80"
          >

            <FaGithub className="text-2xl group-hover:text-blue-400 transition-colors" />

            <span className="font-semibold">
              View All Projects on GitHub
            </span>

            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />

          </a>

        </motion.div>

        {/* =====================================================
            PROJECT SUMMARY
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >

          {[
            {
              label: "Projects",
              value: "10+",
              icon: "🚀",
            },
            {
              label: "Open Source",
              value: "5+",
              icon: "📚",
            },
            {
              label: "Technologies",
              value: "15+",
              icon: "⚡",
            },
            {
              label: "AI Projects",
              value: "2+",
              icon: "🤖",
            },
          ].map((stat) => (

            <motion.div
              key={stat.label}
              whileHover={{
                y: -5,
              }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
            >

              <div className="text-3xl mb-3">
                {stat.icon}
              </div>

              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </div>

              <div className="text-gray-400 text-sm mt-2">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;