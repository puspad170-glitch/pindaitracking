'use client';
import Image from 'next/image';


import React, { useState } from 'react';
import { Bell, Zap } from 'lucide-react';

export default function Navbar() {
  const [isFlashActive, setIsFlashActive] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white/90 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Image
  src="/assets/Logo.png"
  alt="Logo PinDai Tracker"
  width={36}
  height={36}
  className="h-9 w-9 shrink-0 object-contain"
/>
        <div>
          <h1 className="font-heading text-base font-bold text-gray-900 leading-tight">
            PinDai Tracking
          </h1>
          <p className="text-[11px] font-medium text-gray-500">Fleet Management System</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        
        <button
          id="btn-flash"
          onClick={() => setIsFlashActive(!isFlashActive)}
          className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
            isFlashActive 
              ? 'bg-amber-500 text-slate-900' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          title="Toggle Flash"
        >
          <Zap className="w-4 h-4" />
        </button>

        <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}