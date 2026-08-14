import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Informasi() {
  const news = [
    { title: 'Jadwal Pengangkutan Libur Nasional', desc: 'Pengangkutan akan tetap berjalan normal.', time: '3 hari lalu' },
    { title: 'Evaluasi Armada Bulanan', desc: 'Cek performa armada bulan Juli 2024.', time: '2 hari lalu' },
    { title: 'Program Bogor Bersih 2024', desc: 'Ayo dukung kebersihan kota bogor!', time: '25 Jun' },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Informasi & Pengumuman</h2>
        <button className="text-xs text-sky-500 font-semibold flex items-center hover:underline">
          Lihat semua <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>

      <div className="space-y-4">
        {news.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs leading-tight">{item.title}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{item.desc}</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}