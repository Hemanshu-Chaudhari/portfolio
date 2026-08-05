"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaQuoteLeft,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaGraduationCap, label: "Education", value: "Integrated MCA", subtext: "2022–2027" },
    { icon: FaLaptopCode, label: "Tech Stack", value: "MERN Stack", subtext: "Next.js • TypeScript" },
    { icon: FaMapMarkerAlt, label: "Location", value: "India", subtext: "Remote Ready" },
    { icon: FaBriefcase, label: "Status", value: "Available", subtext: "Internship & Full-Time" },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Animated Border Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse" />
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-blue-500 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-purple-500 rounded-bl-3xl" />

            <Image
              src="/profile.png"
              alt="Hemanshu"
              width={400}
              height={400}
              priority
              className="relative rounded-3xl border-2 border-white/10 shadow-2xl group-hover:scale-105 transition duration-500 object-cover"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400 font-medium text-sm">About Me</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              Full Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Developer
              </span>
            </h2>
          </div>

          {/* Quote */}
          <div className="relative">
            <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-500/20 text-4xl" />
            <p className="text-gray-300 text-lg leading-relaxed pl-8">
              I'm{" "}
              <span className="text-blue-400 font-semibold">Hemanshu Chaudhari</span>,
              an enthusiastic Full Stack Developer passionate about crafting exceptional digital experiences. 
              Currently pursuing an{" "}
              <span className="text-blue-400 font-medium">Integrated MCA</span>, 
              I specialize in building modern, scalable web applications that solve real-world problems.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <stat.icon className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 font-medium">{stat.label}</h3>
                    <p className="text-white font-semibold mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CGPA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Academic Performance</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      9.66
                    </span>
                    <span className="text-2xl font-semibold text-gray-400">CGPA</span>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
                  <FaGraduationCap className="text-blue-400 text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-2 border-blue-500/50 px-6 py-3 rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaEye className="group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
              <FaArrowRight className="ml-2 text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href="/resume.pdf"
              download="Hemanshu_Chaudhari_Resume.pdf"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;