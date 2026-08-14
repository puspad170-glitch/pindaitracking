import React from 'react';
import { BarChart3, Truck, Wrench, CheckCircle } from 'lucide-react';

export default function Statistik() {
  const stats = [
    { label: 'Aktif', count: 18, color: 'text-green-500', icon: Truck },
    { label: 'Perjalanan', count: 5, color: 'text-yellow-500', icon: Truck },
    { label: 'Maintenance', count: 2, color: 'text-red-500', icon: Wrench },
    { label: 'Tersedia', count: 20, color: 'text-blue-500', icon: CheckCircle },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-blue-600" />
        <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Statistik Hari Ini</h2>
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