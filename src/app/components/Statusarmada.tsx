import React from 'react';
import { Truck, Wrench, CheckCircle } from 'lucide-react';

export default function StatusArmada() {
  const stats = [
    { label: 'Aktif', count: 18, color: 'text-green-500', bg: 'bg-green-50', icon: Truck },
    { label: 'Perjalanan', count: 5, color: 'text-yellow-500', bg: 'bg-yellow-50', icon: Truck },
    { label: 'Maintenance', count: 2, color: 'text-red-500', bg: 'bg-red-50', icon: Wrench },
    { label: 'Tersedia', count: 20, color: 'text-blue-500', bg: 'bg-blue-50', icon: CheckCircle },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-blue-600" />
          <h2 className="font-bold text-gray-800 text-sm tracking-wide">STATUS ARMADA</h2>
        </div>
        <span className="text-[11px] bg-blue-50 text-blue-500 px-3 py-1 rounded-full font-medium">Hari Ini</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex flex-col items-center justify-center text-center">
              <Icon className={`w-6 h-6 ${item.color} mb-1`} />
              <span className="text-xl font-bold text-gray-800">{item.count}</span>
              <span className="text-[10px] text-gray-400 font-medium capitalize mt-0.5">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}