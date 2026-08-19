'use client';
import Image from 'next/image';
import MaterialIcon from './MaterialIcon';

export default function Navbar() {
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
        <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <MaterialIcon name="notifications" className="text-base" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}