import React from 'react';
import { Gauge, Clock, Fuel, Navigation2, Maximize2, Battery } from 'lucide-react';

export default function TelemetiKendaraan() {
  const metrics = [
    { label: 'Current Speed', value: '35 km/jam', icon: Gauge, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Engine Hours', value: '34.6 jam', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Fuel Level', value: '52 Liter', icon: Fuel, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Trip Distance', value: '49.7 km', icon: Navigation2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Total Distance', value: '580 km', icon: Maximize2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'GPS Battery', value: '95%', icon: Battery, color: 'text-purple-500', bg: 'bg-purple-50', isFill: true },
  ];

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center mb-1`}>
              <Icon className={`w-5 h-5 ${item.color} ${item.isFill ? 'fill-purple-500' : ''}`} />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">{item.label}</span>
            <span className="text-xs font-extrabold text-gray-800 mt-0.5">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}