'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MaterialIcon from '@/app/components/MaterialIcon';

export default function Bottomnavbar() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isPantau = pathname === '/pantau';
  const isProfile = pathname === '/profile' || pathname === '/profil';

  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-[430px] border-t border-gray-100 bg-white"
      style={{
        boxShadow: '0 -4px 24px rgba(0,0,0,0.07)',
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex h-16 items-end justify-around px-1">
        <Link
          href="/"
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
            isHome ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-600 font-medium'
          }`}
        >
          <MaterialIcon name="home" fill={isHome} className="text-2xl" />
          <span className="text-[10px]">Beranda</span>
        </Link>

        <Link
          href="#"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors font-medium"
        >
          <MaterialIcon name="local_shipping" className="text-2xl" />
          <span className="text-[10px]">Armada</span>
        </Link>

        <div className="relative flex flex-1 flex-col items-end justify-center pb-1">
          <Link
            href="/pantau"
            className="absolute -top-7 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 ring-4 ring-blue-100 transition-all active:scale-95 hover:bg-blue-700"
          >
            <MaterialIcon name="map" fill={true} className="text-2xl" />
          </Link>
          <span
            className={`mt-10 w-full text-center text-[10px] ${
              isPantau ? 'font-bold text-blue-600' : 'font-medium text-gray-400'
            }`}
          >
            Peta
          </span>
        </div>

        <Link
          href="#"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors font-medium"
        >
          <MaterialIcon name="schedule" className="text-2xl" />
          <span className="text-[10px]">Riwayat</span>
        </Link>

        <Link
          href="/profile"
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
            isProfile ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-600 font-medium'
          }`}
        >
          <MaterialIcon name="person" fill={isProfile} className="text-2xl" />
          <span className="text-[10px]">Akun</span>
        </Link>
      </div>
    </nav>
  );
}