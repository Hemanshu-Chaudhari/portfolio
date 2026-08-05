"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaCode,
  FaLaptopCode,
  FaReact,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaGraduationCap className="text-4xl text-blue-500" />,
    title: "9.66 CGPA",
    description: "Maintained an excellent academic record in Integrated MCA.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    title: "2+ Full Stack Projects",
    description:
      "Built complete web applications using the MERN Stack and Next.js.",
  },
  {
    icon: <FaReact className="text-4xl text-blue-500" />,
    title: "Modern Frontend",
    description:
      "Developed responsive and interactive applications using React and Next.js.",
  },
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: "Backend Development",
    description:
      "Experience with Node.js, Express.js, MongoDB, JWT Authentication and REST APIs.",
  },
  {
    icon: <FaAward className="text-4xl text-blue-500" />,
    title: "Continuous Learner",
    description:
      "Regularly improving skills through projects and modern web technologies.",
  },
  {
    icon: <FaRocket className="text-4xl text-blue-500" />,
    title: "Career Goal",
    description:
      "Seeking internship and full-time opportunities as a Full Stack Developer.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Achievements
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Highlights of my learning journey and technical growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-slate-800 rounded-2xl p-8 shadow-xl"
            >
              {item.icon}

              <h3 className="text-2xl font-bold mt-6 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;