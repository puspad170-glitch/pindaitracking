import Image from 'next/image';
import React from 'react';
import { Sun } from 'lucide-react';

export default function Statistik() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 px-5 pt-8 pb-14 text-white">
     
      <Image
  src="/assets/Logo Pindai Tracker.svg"
  alt="Logo Watermark"
  width={224}
  height={224}
  className="absolute -right-8 -top-2 w-56 opacity-25 rotate-[12deg] pointer-events-none"
/>

      
      <div className="relative z-10 flex items-center justify-center mx-auto gap-3">
        <Sun className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-md" />
        <h2 className="font-lexend text-xl font-bold tracking-tight text-white drop-shadow-xs">
          Selamat Siang Admin!
        </h2>
      </div>
    </div>
  );
}