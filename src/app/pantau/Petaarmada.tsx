import React from 'react';
import Link from 'next/link';

export default function Petaarmada() {
  return (
    <Link href="/pantau" className="block group cursor-pointer">
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 space-y-3 transition-all duration-200 group-hover:shadow-md">
    
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-extrabold text-emerald-900 tracking-wider uppercase">
            Pemantauan Armada
          </h2>
          <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-blue-600 transition-colors">
            arrow_forward_ios
          </span>
        </div>

        <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-gray-100">
          <iframe
            title="Lokasi Armada"
            src="https://maps.google.com/maps?q=-6.5971,106.7949&z=15&output=embed"
            className="w-full h-full border-0 pointer-events-none"
            loading="lazy"
          ></iframe>

          
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-blue-600">touch_app</span>
            Klik untuk Pantau
          </div>
        </div>
      </div>
    </Link>
  );
}