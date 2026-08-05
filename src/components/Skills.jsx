"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiPostman,
  SiFigma,
  SiRedux,
  SiGraphql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode className="text-blue-400" />,
    skills: [
      { name: "React", icon: <FaReact size={28} className="text-cyan-400" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs size={28} />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript size={28} className="text-blue-500" />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-400" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-sky-400" />, level: 88 },
      { name: "Redux", icon: <SiRedux size={28} className="text-purple-500" />, level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: <FaCode className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={28} className="text-green-500" />, level: 85 },
      { name: "Express.js", icon: <SiExpress size={28} />, level: 82 },
      { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-600" />, level: 80 },
      { name: "MySQL", icon: <SiMysql size={28} className="text-blue-500" />, level: 75 },
      { name: "GraphQL", icon: <SiGraphql size={28} className="text-pink-500" />, level: 60 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <FaCode className="text-purple-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt size={28} className="text-orange-500" />, level: 88 },
      { name: "GitHub", icon: <FaGithub size={28} />, level: 90 },
      { name: "Docker", icon: <SiDocker size={28} className="text-blue-400" />, level: 55 },
      { name: "Postman", icon: <SiPostman size={28} className="text-orange-400" />, level: 78 },
      { name: "Figma", icon: <SiFigma size={28} className="text-pink-400" />, level: 65 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-slate-950 text-white py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            <span className="text-blue-400 font-medium text-sm">Tech Stack</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I've been working with and exploring
          </p>
        </motion.div>

        {/* Skills Grid - Categorized */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Category Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <span className="ml-auto text-sm text-gray-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills List */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-800 rounded-lg group-hover/skill:bg-slate-700 transition-colors">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["REST APIs", "Responsive Design", "Git Workflow", "Agile/Scrum", "Problem Solving", "Team Collaboration"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 cursor-default transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: "15+" },
            { label: "Projects", value: "10+" },
            { label: "Learning Hours", value: "1000+" },
            { label: "Coffee Cups", value: "∞" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;