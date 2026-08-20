import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import MaterialIcon from './MaterialIcon';

export default function Kendaraanonline() {
  const vehicles = [
    { id: 'GPS F52672', driver: 'Rusman', speed: '35 km/jam', img: '/assets/Truk.jpg' },
    { id: 'GPS F52690', driver: 'Ahmad', speed: '42 km/jam', img: '/assets/Truk_2.jpeg' },
  ];

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xs border border-gray-100 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-lexend text-sm font-bold text-teal-900">KENDARAAN ONLINE</h3>
        <Link href="#" className="text-[11px] font-medium text-sky-500 hover:underline flex items-center gap-0.5">
          Lihat semua <MaterialIcon name="chevron_right" className="text-sm" />
        </Link>
      </div>

      <div className="space-y-2.5">
        {vehicles.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded-xl border border-gray-100 bg-zinc-50 p-3">
            <div className="flex items-center gap-2.5">
              <Image
                src={item.img}
                alt="Foto Truk"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-lg object-cover border border-gray-200"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-teal-900">{item.id}</h4>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[8px] font-semibold text-emerald-700">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">
                  Driver: <span className="font-bold text-teal-900">{item.driver}</span> • {item.speed}
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 text-[10px] font-bold transition-colors shadow-xs">
              Tracking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}