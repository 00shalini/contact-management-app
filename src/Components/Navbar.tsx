import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='w-56 h-sscreen bg-teal-950'>
        <ul className='m-6'>
          <li className='mb-16 border-b-2 text-lg font-semibold text-white'>
            <Link to="/">Contacts</Link>
          </li>
          <li className='mb-16 border-b-2 text-lg font-semibold text-white'>
            <Link to="/dashboard">Charts & Maps</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
