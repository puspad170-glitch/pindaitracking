import React from 'react';
import { Home, Truck, Map, Clock, User } from 'lucide-react';

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center z-50 rounded-t-2xl shadow-lg">
      <button className="flex flex-col items-center gap-1 text-sky-500">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold">Beranda</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-sky-500">
        <Truck className="w-5 h-5" />
        <span className="text-[10px] font-medium">Armada</span>
      </button>

      <button className="flex flex-col items-center -mt-6">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <Map className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold text-blue-500 mt-1">Peta</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-sky-500">
        <Clock className="w-5 h-5" />
        <span className="text-[10px] font-medium">Riwayat</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-sky-500">
        <User className="w-5 h-5" />
        <span className="text-[10px] font-medium">Akun</span>
      </button>
    </div>
  );
}