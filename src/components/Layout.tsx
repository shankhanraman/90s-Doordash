import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#000066] text-white font-['Comic_Sans_MS',_cursive] p-4">
      <Header />
      <main className="max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}