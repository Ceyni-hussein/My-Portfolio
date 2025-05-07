
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    id: 3,
    title: "Dashboard App",
    description: "A dynamic admin dashboard built using React and Chart.js.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    id: 3,
    title: "Counter",
    description: "A dynamic counter built using Javascript and tailwindcss",
    image: "https://via.placeholder.com/400",
    link: "https://ceyni-hussein.github.io/Counter/",
  },
  {
    id: 3,
    title: "Lightening Project",
    description: "A dynamic lightening project built using React and tailwind.css.",
    image: "https://via.placeholder.com/400",
    link: "https://ceyni-hussein.github.io/Lightening-Project/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
      {/* Title Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="pt-4">My Projects</h1>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: project.id * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-md text-white font-semibold inline-block"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;