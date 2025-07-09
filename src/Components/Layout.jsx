import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-neutral text-darkText font-sans">
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Motasim.dev</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/about" className="hover:text-secondary">About</Link>
            <Link to="/projects" className="hover:text-secondary">Projects</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
