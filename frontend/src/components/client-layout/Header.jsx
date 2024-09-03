import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../media/auth.jpg';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Recipe Logo" className="h-10" />
          <span className="ml-3 text-2xl font-bold">Project Management</span>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              {/* <Link to="/userlogin" className="hover:text-yellow-500">User Login</Link> */}
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
            </li>
            <li>
              <Link to="/companies" className="hover:text-yellow-500">Companies</Link>
            </li>
            <li>
              <Link to="/client" className="hover:text-yellow-500">Client</Link>
            </li>
            <li>
              <Link to="/employee" className="hover:text-yellow-500">Employee</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-500">Projects</Link>
            </li>
            <li>
              <Link to="/documents" className="hover:text-yellow-500">Documents</Link>
            </li>
          </ul>
        </nav>
        {/* UserLogin Button */}
        <div>
          <Link to="/login" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">
            User
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
