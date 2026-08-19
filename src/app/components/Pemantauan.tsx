import React from 'react';
import Link from 'next/link';

export default function Pemantauan() {
  return (
    <Link href="/pantau" className="block cursor-pointer group">
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-gray-100 space-y-3 transition-all group-hover:shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-lexend text-sm font-bold text-teal-900">PEMANTAUAN ARMADA</h3>
          <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-blue-600 transition-colors">
            arrow_forward_ios
          </span>
        </div>

      
        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-slate-100 border border-gray-200">
          <iframe
            className="h-full w-full object-cover pointer-events-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.750149242427!2d106.79239857575325!3d-6.592129593401588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5ca03549999%3A0xce0201a1ffcc7b8!2sDinas%20Perumahan%20dan%20Permukiman%20Kota%20Bogor!5e0!3m2!1sid!2sid!4v1786678296860!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Dynamic Detail Card */}
        <div className="rounded-xl border border-gray-100 bg-slate-50 p-3 flex items-center justify-between gap-3">
          <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-200 border border-gray-200 overflow-hidden">
            <img src="/assets/Truk.jpg" alt="Foto Kendaraan" className="h-full w-full object-cover" />
          </div>

          <div className="flex-1 min-w-0 space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-teal-900 truncate">GPS F52618</span>
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 shrink-0">
                Online
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-700 truncate">
              Pengemudi: <span className="font-bold text-teal-900">Budi Santoso</span>
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              Status: <span className="font-bold text-teal-900">Menuju TPS Sukasari</span>
            </p>
          </div>

          <div className="text-right shrink-0 space-y-0.5">
            <span className="text-[9px] font-medium text-gray-400 block">ETA</span>
            <span className="font-bold text-xs text-blue-600 block">8 menit</span>
          </div>
        </div>
      </div>
    </Link>
  );
}