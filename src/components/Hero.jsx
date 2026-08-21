"use client";

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
  FaStar,
} from "react-icons/fa";

// ============================================================================
// Sub-Components
// ============================================================================

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient orb 1 - Top Left */}
    <motion.div
      animate={{
        x: [0, 150, 0],
        y: [0, 80, 0],
        rotate: [0, 45, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-600/15 via-transparent to-transparent rounded-full blur-3xl"
    />

    {/* Gradient orb 2 - Bottom Right */}
    <motion.div
      animate={{
        x: [0, -150, 0],
        y: [0, -80, 0],
        rotate: [0, -45, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-cyan-600/15 via-transparent to-transparent rounded-full blur-3xl"
    />

    {/* Animated grid lines - subtle background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
  </div>
);

const PremiumBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 px-5 py-2.5 rounded-full backdrop-blur-md hover:border-blue-500/60 transition duration-300 group">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="text-blue-400"
      >
        <FaCode size={16} />
      </motion.div>
      <span className="text-blue-300 text-sm font-medium">Full Stack Developer</span>
    </div>
  </motion.div>
);

const MainHeading = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-widest font-semibold text-blue-400/80">
        Welcome to my portfolio
      </p>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
        <span className="block text-white">Hemanshu</span>
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Chaudhari
        </span>
      </h1>
    </div>

    <div className="space-y-3">
      <p className="text-xl md:text-2xl font-medium text-gray-300">
        Crafting{" "}
        <TypeAnimation
          sequence={[
            "scalable web applications",
            2500,
            "high-performance solutions",
            2500,
            "modern digital experiences",
            2500,
            "cutting-edge web products",
            2500,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold"
        />
      </p>
      <p className="text-gray-400 text-base leading-relaxed">
        With expertise in MERN stack development. I build elegant, scalable solutions
        focused on clean architecture and exceptional user experience.
      </p>
    </div>
  </motion.div>
);

const SkillBar = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    whileHover={{ x: 8 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition">
        {skill.name}
      </span>
      <span className="text-xs font-medium text-blue-400/60">{skill.level}%</span>
    </div>
    <div className="relative w-full h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600/30">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{
          duration: 1.5,
          delay: delay + 0.3,
          ease: "easeOut",
        }}
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "Node.js & Express", level: 93 },
    { name: "MongoDB", level: 90 },
    { name: "Tailwind CSS", level: 94 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
        <h3 className="text-sm uppercase tracking-widest font-semibold text-blue-400">
          Core Technologies
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-blue-500/20 to-transparent" />
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={0.7 + index * 0.1} />
        ))}
      </div>
    </motion.div>
  );
};

const CTAButton = ({ href, download, isPrimary, children, icon: Icon, arrowIcon: ArrowIcon }) => (
  <motion.a
    href={href}
    download={download}
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.3 }}
    className={`group relative overflow-hidden px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition duration-300 ${
      isPrimary
        ? "text-white"
        : "border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
    }`}
  >
    {isPrimary && (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition duration-300" />
    )}
    {isPrimary && (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-white" />
    )}
    <div className="relative flex items-center gap-2">
      <Icon size={16} />
      {children}
      {ArrowIcon && <ArrowIcon size={14} className="group-hover:translate-x-1 transition" />}
    </div>
  </motion.a>
);

const CTASection = () => (
  <div className="flex flex-wrap gap-4">
    <CTAButton
      href="/resume.pdf"
      download="Hemanshu_Chaudhari_Resume.pdf"
      isPrimary={true}
      icon={FaDownload}
    >
      Download Resume
    </CTAButton>

    <CTAButton
      href="#contact"
      isPrimary={false}
      icon={FaPaperPlane}
      arrowIcon={FaArrowRight}
    >
      Start Project
    </CTAButton>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, y: -3 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5 }}
    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/30 flex items-center justify-center text-lg text-gray-400 hover:text-blue-400 hover:border-blue-500/60 transition duration-300 group backdrop-blur-sm"
    title={label}
  >
    <Icon className="group-hover:scale-125 group-hover:rotate-12 transition" />
  </motion.a>
);

const SocialSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4 }}
    className="flex gap-3 pt-4"
  >
    <SocialLink href="https://github.com/Hemanshu-Chaudhari" icon={FaGithub} label="GitHub" />
    <SocialLink href="https://www.linkedin.com/in/hemanshu-chaudhari-474024334" icon={FaLinkedin} label="LinkedIn" />
    <SocialLink href="mailto:himanshuchaudahri156@gmail.com" icon={FaEnvelope} label="Email" />
  </motion.div>
);

const ScrollIndicator = () => (
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-blue-400 transition cursor-pointer group">
      <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-gray-500 group-hover:border-blue-400 rounded-full flex justify-center p-2 transition">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-blue-400 rounded-full transition"
        />
      </div>
    </div>
  </motion.div>
);

// ============================================================================
// Main Hero Component
// ============================================================================

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#1a1f35] text-white overflow-hidden flex items-center pt-20">
      
      <AnimatedBackground />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Badge Section */}
          <PremiumBadge />

          {/* Heading Section */}
          <MainHeading />

          {/* Skills Section */}
          <SkillsSection />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <CTASection />
          </motion.div>

          {/* Social Links */}
          <SocialSection />

        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;