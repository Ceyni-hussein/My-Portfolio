
import { div } from "framer-motion/client";
import image from "../assets/cayuuni.png"
import img from "../assets/ceyni.png"
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

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
];
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


const Home = () => {
  return (
    <div>
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6">
      
      {/* Qoraalka - Bidix */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
         <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter pb-6 pt-9'>
            Hello I'm <span className="text-blue-500">Ceyni </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
        I'm a passionate Frontend Developer 
          with a strong focus on React . I strive to create interactive and user friendly websites
          looking for opportunities to contribute my skills and grow as a Developer.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-md text-white font-semibold"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition duration-300 rounded-md font-semibold"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Sawirka - Midig */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img 
          src={img} 
          alt="Profile"
          className="w-72 md:w-96 rounded-lg shadow-lg"
        />
      </motion.div>

    </div>
    {/* About */}
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
      {/* Projects */}
      <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
            {/* Title Animation */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              My Projects
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
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
                
                {/* Title */}
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  My Experience
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
              {/* contact */}
              <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
      
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <form action="#" method="POST">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
              rows="4"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-md text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-2">Or Reach Me At</h3>
        <a href="https://github.com/Ceyni-hussein" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              🔗 GitHub
            </a>
        <p className="text-lg">Email: <a href="kalsoonhussein@gmail.com" className="text-blue-400">kalsoonhussein498@gmail.com</a></p>
        <p className="text-lg">Phone: <span className="text-blue-400">+252 619972350</span></p>
      </motion.div>
      
    </div>
    </div>
  );
};

export default Home;
