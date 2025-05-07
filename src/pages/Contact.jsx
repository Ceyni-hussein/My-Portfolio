
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
      
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="pt-6">Contact Me</h1>
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
  );
};

export default Contact;