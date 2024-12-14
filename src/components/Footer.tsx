import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FF6B6B] text-white p-6 border-4 border-yellow-300 rounded text-center">
      <h2 className="text-2xl font-bold mb-4">📞 Contact Us! 📞</h2>
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6" />
          <span>+1 97-38-38-38-38</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6" />
          <span>webmaster@doordash.com</span>
        </div>
      </div>
      <p className="mt-4 text-sm">
        © 1999 DOORDASH. Best viewed in Netscape Navigator 4.0 or Internet Explorer 5.0
      </p>
      <div className="mt-4">
        <img 
          src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=100&h=50&fit=crop" 
          alt="Under Construction" 
          className="inline-block"
        />
      </div>
    </footer>
  );
}