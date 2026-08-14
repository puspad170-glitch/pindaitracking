import React from 'react';
import { Sun } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="bg-linear-to-r from-sky-500 to-blue-600 text-white p-6 rounded-b-[2.5rem] shadow-md flex items-center justify-center gap-3">
      <Sun className="w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
      <h1 className="text-xl font-extrabold tracking-wide">Selamat Siang Admin!</h1>
    </div>
  );
}