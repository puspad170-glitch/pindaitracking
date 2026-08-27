'use client';

import React from 'react';
import Image from 'next/image';
import MaterialIcon from './MaterialIcon';

export default function HeaderBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 px-5 pt-6 pb-14 text-white">
     
      <Image
        src="/assets/Logo.png"
        alt="Logo Watermark"
        width={224}
        height={224}
        className="absolute -right-8 -top-2 w-56 opacity-25 rotate-12 pointer-events-none"
      />

      
      <div className="relative z-10 flex items-center justify-center mx-auto gap-3">
        <MaterialIcon name="sunny" fill={true} className="text-3xl text-yellow-300 drop-shadow-md" />
        <h2 className="font-lexend text-xl font-bold tracking-tight text-white drop-shadow-xs">
          Selamat Siang Admin!
        </h2>
      </div>
    </div>
  );
}