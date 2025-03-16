
import { motion } from "framer-motion";
import image from "../assets/kalsoon.png"
const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-16">
      
      {/* Sawirka - Bidix */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={image}
          alt="About Me"
          className="w-72 md:w-96 rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Qoraalka - Midig */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I'm a passionate <span className="text-blue-400">Front-End Developer</span> with a strong background in *React, Tailwind CSS, and UI/UX Design*. 
          I love building user-friendly, responsive, and high-performance web applications.
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          My goal is to create seamless digital experiences that *enhance user engagement and satisfaction*. 
          Currently, I'm learning *Back-End Development* to become a *Full-Stack Developer*.
        </p>
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-md text-white font-semibold inline-block"
        >
          View My Work
        </a>
      </motion.div>

    </div>
  );
};

export default About;
