import React from 'react';
import { Pizza } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-[#FF6B6B] text-center p-4 border-4 border-yellow-300 rounded shadow-lg mb-8">
      <Link to="/">
        <div className="flex items-center justify-center gap-4">
          <Pizza size={48} className="animate-spin" />
          <h1 className="text-6xl font-bold text-yellow-300 shadow-sm">DOORDASH</h1>
          <Pizza size={48} className="animate-spin" />
        </div>
      </Link>
      <p className="text-white mt-2 text-xl">🌟 Your #1 Food Delivery Service on the World Wide Web! 🌟</p>
      <nav className="mt-4">
        <ul className="flex justify-center gap-4">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/restaurants" className="text-white hover:text-yellow-300">Restaurants</Link>
          </li>
          <li>
            <Link to="/order" className="text-white hover:text-yellow-300">Order Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}