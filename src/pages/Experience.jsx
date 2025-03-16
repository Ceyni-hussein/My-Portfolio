
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Intern Web Developer",
    company: "Kaafiye Technology Center",
    date: "2024",
    description: "Worked on real-world web development projects, improving skills in React, Tailwind CSS, and UI/UX design.",
  },
  {
    id: 2,
    title: "Computer Science Graduate",
    company: "Mogadishu University",
    date: "2020 - 2024",
    description: "Completed a Bachelor's degree in Computer Science, focusing on software development and problem-solving.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
      
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="pt-7">My Experience</h1>
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-500 ml-4 md:ml-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="mb-10 ml-6 md:ml-10 p-6 bg-gray-800 rounded-lg shadow-lg relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {/* Dot */}
            <div className="absolute -left-4 top-6 w-6 h-6 bg-blue-500 rounded-full"></div>

            {/* Content */}
            <h3 className="text-2xl font-bold">{exp.title}</h3>
            <p className="text-lg text-blue-300">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Experience;
