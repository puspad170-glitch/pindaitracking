import React from 'react';
import MaterialIcon from './MaterialIcon';
import Link from 'next/link';

export default function Bottomnavbar() {
  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-md border-t border-gray-100 bg-white"
      style={{
        boxShadow: '0 -4px 24px rgba(0,0,0,0.07)',
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex h-16 items-end justify-around px-1">

        <Link href="/" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-blue-600 transition-colors">
          <MaterialIcon name="home" fill={true} className="text-2xl" />
          <span className="text-[10px] font-bold">Beranda</span>
        </Link>


        <Link href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <MaterialIcon name="local_shipping" className="text-2xl" />
          <span className="text-[10px] font-medium">Armada</span>
        </Link>


        <div className="relative flex flex-1 flex-col items-end justify-center pb-1">
          <Link
            href="/pantau"
            className="absolute -top-7 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 ring-4 ring-blue-100 transition-all active:scale-95 hover:bg-blue-700"
          >
            <MaterialIcon name="map" fill={true} className="text-2xl" />
          </Link>
          <span className="mt-10 w-full text-center text-[10px] font-bold text-blue-600">Peta</span>
        </div>


        <Link href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <MaterialIcon name="schedule" className="text-2xl" />
          <span className="text-[10px] font-medium">Riwayat</span>
        </Link>

        <Link href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <MaterialIcon name="person" className="text-2xl" />
          <span className="text-[10px] font-medium">Akun</span>
        </Link>
      </div>
    </nav>
  );
}