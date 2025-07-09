import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-textMain p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Motasim's Portfolio</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <Link to="/about" className="hover:text-secondary">About</Link>
        <Link to="/projects" className="hover:text-secondary">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
