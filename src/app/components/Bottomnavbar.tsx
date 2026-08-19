import React from 'react';
import { Home, Truck, Map, History, User } from 'lucide-react';

export default function Bottomnavbar() {
  return (
    <nav
      id="bottom-nav"
      className="absolute inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white"
      style={{
        boxShadow: '0 -4px 24px rgba(0,0,0,0.07)',
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex h-16 items-end justify-around px-1">
       
        <a href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-blue-600 transition-colors">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Beranda</span>
        </a>

       
        <a href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Truck className="w-5 h-5" />
          <span className="text-[10px] font-medium">Armada</span>
        </a>

       
        <div className="relative flex flex-1 flex-col items-end justify-center pb-1">
          <a
            href="#"
            className="absolute -top-7 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 ring-4 ring-blue-100 transition-all active:scale-95 hover:bg-blue-700"
          >
            <Map className="w-6 h-6" />
          </a>
          <span className="mt-10 w-full text-center text-[10px] font-bold text-blue-600">Peta</span>
        </div>

      
        <a href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <History className="w-5 h-5" />
          <span className="text-[10px] font-medium">Riwayat</span>
        </a>

        <a href="#" className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-gray-400 hover:text-gray-600 transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Akun</span>
        </a>
      </div>
    </nav>
  );
}