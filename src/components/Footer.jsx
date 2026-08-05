"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaTwitter, 
  FaDiscord,
  FaHeart,
  FaArrowUp,
  FaMapMarkerAlt,
  FaCopyright,
  FaCode,
  FaCoffee
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/Hemanshu-Chaudhari", 
      label: "GitHub",
      color: "hover:text-gray-300" 
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/hemanshu-chaudhari-474024334", 
      label: "LinkedIn",
      color: "hover:text-blue-500" 
    },
    { 
      icon: FaTwitter, 
      href: "#", 
      label: "Twitter",
      color: "hover:text-sky-400" 
    },
    { 
      icon: FaDiscord, 
      href: "#", 
      label: "Discord",
      color: "hover:text-indigo-400" 
    },
    { 
      icon: FaEnvelope, 
      href: "mailto:himanshuchaudahri156@gmail.com", 
      label: "Email",
      color: "hover:text-red-400" 
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Hemanshu
              </h2>
            </Link>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Full Stack Developer passionate about building modern web applications 
              and solving real-world problems.
            </p>
            
            {/* Location & Time */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaCode className="text-green-400" />
                <span>Available for freelance</span>
              </div>
              <div className="text-xs text-gray-600">
                Local Time: {currentTime} IST
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Latest Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Latest Work</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Hotel Management System
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Expense Sathi
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hemanshu-Chaudhari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm flex items-center gap-1"
                >
                  View All Projects →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Let's build something amazing together.
            </p>
            
            <a
              href="mailto:himanshuchaudahri156@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 mb-4"
            >
              <FaEnvelope />
              Get in Touch
            </a>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-slate-800/50 p-3 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-slate-800`}
                  title={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaCopyright className="text-xs" />
              <span>{new Date().getFullYear()} Hemanshu Chaudhari. All rights reserved.</span>
            </div>

            {/* Built with love */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            {/* Coffee */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaCoffee className="text-yellow-600" />
              <span>Fueled by coffee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;