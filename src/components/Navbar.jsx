import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className=" hidden md:flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
