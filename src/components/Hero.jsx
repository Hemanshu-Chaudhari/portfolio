"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Express", level: 90 },
    { name: "Node.js", level: 92 },
    { name: "MongoDB", level: 88 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#1a1f35] text-white overflow-hidden flex items-center pt-20">
      
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 150, 0], 
            y: [0, 80, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -150, 0], 
            y: [0, -80, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-cyan-600/10 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side - Premium Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 px-5 py-2.5 rounded-full backdrop-blur-sm hover:border-blue-500/60 transition duration-300">
                <FaCode className="text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Full Stack Developer</span>
              </div>
            </motion.div>

            {/* Main Heading - Ultra Premium */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest font-semibold text-blue-400">Welcome</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                  <span className="block text-white">Hemanshu</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Chaudhari
                  </span>
                </h1>
              </div>
              
              <div className="text-2xl md:text-3xl font-medium text-gray-300">
                Building{" "}
                <TypeAnimation
                  sequence={[
                    "scalable web applications",
                    2500,
                    "high-performance solutions",
                    2500,
                    "modern digital products",
                    2500,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold"
                />
              </div>
            </motion.div>

            {/* Premium Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              I craft elegant, high-performance web solutions using modern technologies. 
              Specializing in MERN stack development with a focus on scalability, 
              user experience, and clean architecture.
            </motion.p>

            {/* Skills with Progress Indicators */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-blue-400">
                Core Technologies
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
              <motion.a
                href="/resume.pdf"
                download="Hemanshu_Chaudhari_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-white"></div>
                <div className="relative flex items-center gap-2">
                  <FaDownload size={16} />
                  Download Resume
                </div>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-lg font-semibold border-2 border-blue-500 hover:border-cyan-400 hover:bg-blue-500/10 transition duration-300 flex items-center gap-2"
              >
                <FaPaperPlane size={16} />
                Start Project
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition" />
              </motion.a>
            </motion.div>

            {/* Social Links - Premium */}
            <motion.div variants={itemVariants} className="flex gap-3 pt-6">
              <SocialLinkPremium
                href="https://github.com/Hemanshu-Chaudhari"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialLinkPremium
                href="https://www.linkedin.com/in/hemanshu-chaudhari-474024334"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialLinkPremium
                href="mailto:himanshuchaudahri156@gmail.com"
                icon={FaEnvelope}
                label="Email"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Profile Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Profile Container */}
            <div className="relative group">
              {/* Animated Border Glow */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 40px rgba(59, 130, 246, 0.3)",
                    "0 0 60px rgba(34, 211, 238, 0.2)",
                    "0 0 40px rgba(59, 130, 246, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 group-hover:border-blue-500/60 transition duration-300">
                  <Image
                    src="/profile.png"
                    alt="Hemanshu Chaudhari"
                    width={450}
                    height={450}
                    priority
                    className="w-full h-auto"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
                </div>
              </motion.div>
            </div>

            {/* Stats Card - Premium */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 backdrop-blur-xl rounded-xl p-6 group hover:border-blue-500/60 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div>
                  <p className="text-sm text-gray-400">Completed</p>
                  <p className="text-lg font-semibold text-white">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-gray-400 hover:text-blue-400 transition cursor-pointer group">
          <span className="text-xs uppercase tracking-widest font-semibold group-hover:text-blue-400">Scroll</span>
          <div className="w-5 h-8 border border-blue-400/40 rounded-full flex justify-center p-1 group-hover:border-blue-400 transition">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-blue-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLinkPremium = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center text-xl text-gray-300 hover:text-blue-400 hover:border-blue-500/60 transition duration-300 group"
    title={label}
  >
    <Icon className="group-hover:scale-110 transition" />
  </motion.a>
);

export default Hero;