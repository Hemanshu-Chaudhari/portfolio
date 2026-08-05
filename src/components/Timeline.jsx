"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const timeline = [
  {
    year: "2022",
    icon: <FaGraduationCap />,
    title: "Started Integrated MCA",
    description:
      "Embarked on my journey in computer science and software development. Built strong foundations in programming and problem-solving.",
    achievements: ["Enrolled in Integrated MCA program", "Learned C & C++ basics"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    icon: <FaLaptopCode />,
    title: "Web Development Fundamentals",
    description:
      "Mastered HTML, CSS, and JavaScript. Started building responsive and interactive websites with modern design principles.",
    achievements: ["Built 5+ responsive websites", "Learned Git version control"],
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2024",
    icon: <FaReact />,
    title: "React & Frontend Development",
    description:
      "Dived deep into React ecosystem. Built multiple projects using component-based architecture and modern state management.",
    achievements: ["Created 3 major React projects", "Learned Redux & Context API"],
    color: "from-blue-400 to-purple-500",
  },
  {
    year: "2025",
    icon: <FaNodeJs />,
    title: "Full Stack MERN Development",
    description:
      "Expanded to backend development. Built complete full-stack applications with Node.js, Express, and MongoDB integration.",
    achievements: ["Built Hotel Management System", "Mastered RESTful APIs"],
    color: "from-orange-500 to-red-500",
  },
  {
    year: "2026",
    icon: <SiNextdotjs />,
    title: "Next.js & Modern Stack",
    description:
      "Embraced modern development with Next.js, TypeScript, and Tailwind CSS. Building scalable and performant web applications.",
    achievements: ["Learned Next.js App Router", "Built portfolio with Framer Motion"],
    color: "from-purple-500 to-pink-500",
    current: true,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
            <span className="text-blue-400 font-medium text-sm">Timeline</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my growth and learning in the world of software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div className={`flex items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline Node */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} shadow-lg ${
                      item.current ? "ring-4 ring-blue-500/30 animate-pulse" : ""
                    }`}
                  >
                    <div className="text-2xl text-white">
                      {item.icon}
                    </div>
                    
                    {/* Current Indicator */}
                    {item.current && (
                      <div className="absolute -top-2 -right-2">
                        <span className="flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500" />
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} bg-opacity-10 px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                      <FaStar className="text-yellow-400" />
                      {item.year}
                      {item.current && (
                        <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded-full">
                          Present
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex items-center gap-2 text-sm ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <FaCheckCircle className="text-green-400 flex-shrink-0" />
                          <span className="text-gray-400">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow decoration */}
                    <div className={`absolute top-8 ${
                      index % 2 === 0 
                        ? "md:right-0 md:translate-x-1/2" 
                        : "md:left-0 md:-translate-x-1/2"
                    } hidden md:block`}>
                      <FaArrowRight className={`text-blue-500 ${
                        index % 2 === 1 ? "rotate-180" : ""
                      }`} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Goal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">The Journey Continues...</h3>
            <p className="text-gray-400">
              Currently seeking internship and full-time opportunities to apply my skills 
              and contribute to impactful real-world projects.
            </p>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Years of Learning", value: "4+", icon: "📚" },
            { label: "Technologies Mastered", value: "15+", icon: "⚡" },
            { label: "Projects Built", value: "10+", icon: "🚀" },
            { label: "Certifications", value: "5+", icon: "🏆" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;