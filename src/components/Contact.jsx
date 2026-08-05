"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaDiscord,
  FaCheckCircle,
  FaSpinner,
  FaArrowRight,
  FaHandshake,
  FaCoffee,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "himanshuchaudahri156@gmail.com",
      href: "mailto:himanshuchaudahri156@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Hemanshu-Chaudhari",
      href: "https://github.com/Hemanshu-Chaudhari",
      color: "text-gray-300",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "hemanshu-chaudhari",
      href: "https://www.linkedin.com/in/hemanshu-chaudhari-474024334",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      value: "@hemanshu_dev",
      href: "#",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Hemanshu-Chaudhari", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hemanshu-chaudhari-474024334", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
    { icon: FaDiscord, href: "#", color: "hover:text-indigo-400" },
  ];

  return (
    <section id="contact" className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="text-blue-400 font-medium text-sm">Get in Touch</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm always excited to discuss new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`p-3 ${info.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                    <info.icon className={`text-2xl ${info.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium truncate">{info.value}</p>
                  </div>
                  <FaArrowRight className="text-gray-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="font-semibold text-green-400">Available for Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open to internships, freelance projects, and full-time positions
              </p>
            </motion.div>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <FaPaperPlane />
                <span>Download CV</span>
              </motion.a>
              
              <motion.a
                href="mailto:himanshuchaudahri156@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-slate-700 hover:border-blue-500/50 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <FaEnvelope />
                <span>Email Me</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Find me on:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaHandshake className="text-blue-400" />
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors duration-300 placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors duration-300 placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors duration-300 placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message here..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors duration-300 resize-none placeholder:text-gray-600"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 text-gray-500">
            <FaCoffee className="text-xl" />
            <span>Let's grab a virtual coffee and discuss your project!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;