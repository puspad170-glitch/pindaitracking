import React from 'react';
import { MapPin } from 'lucide-react';

export default function PetaArmada() {
  return (
    <div className="relative w-full h-72 bg-sky-50 -mt-6 z-0 border-b border-gray-200 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size:[12px_12px] opacity-60"></div>

      <svg className="absolute inset-0 w-full h-full">
        <path 
          d="M 80 80 Q 140 120 180 160 T 240 230" 
          stroke="#0284c7" 
          strokeWidth="5" 
          fill="none" 
          strokeLinecap="round" 
        />
        <path 
          d="M 40 180 L 320 100" 
          stroke="#e2e8f0" 
          strokeWidth="8" 
          fill="none" 
        />
      </svg>

    
      <div className="absolute top-4 right-28 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
        <span>🏥 RS UMMI</span>
      </div>

      <div className="absolute top-16 left-12 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-gray-500 px-2 py-1 rounded shadow">
        Jl. K.H. Soleh
      </div>

      <div className="absolute top-20 right-8 text-gray-400 text-[11px] font-semibold">
        South Bogor Subdistrict
      </div>

      <div className="absolute top-32 right-12 bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-orange-200">
        Seblak prasmanan teh
      </div>

      <div className="absolute bottom-16 right-20 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-purple-200">
        JBound
      </div>

     
      <div className="absolute top-24 left-32 flex flex-col items-center">
        <div className="bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow mb-1 whitespace-nowrap">
          K.masuk tps<br />Menuju TPS
        </div>
        <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-lg shadow-lg border-2 border-white animate-bounce">
          🚛
        </div>
      </div>

      
      <div className="absolute bottom-10 right-28 flex flex-col items-center">
        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <MapPin className="w-5 h-5 text-white fill-white" />
        </div>
      </div>

      <div className="absolute bottom-2 left-2 text-[12px] font-bold text-gray-400">Google</div>
      <div className="absolute bottom-2 right-2 text-[9px] text-gray-400">Map data ©2026</div>
    </div>
  );
}