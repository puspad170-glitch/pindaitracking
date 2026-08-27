'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Statusarmada from './components/Statusarmada';
import Pengangkutan from './components/Pengangkutan';
import Pemantauan from './components/Pemantauan';
import Kendaraanonline from './components/Kendaraanonline';
import Informasi from './components/Informasi';
import Bottomnavbar from './components/Bottomnavbar';

export default function DashboardPage() {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-white min-h-screen shadow-sm pb-24 overflow-hidden">
        {/* 1. Header Navbar Putih */}
        <Navbar />

        {/* 2. Banner Biru Selamat Siang Admin */}
        <Header />

        {/* 3. Konten Utama Beranda */}
        <main className="px-4 space-y-4">
          <Statusarmada />
          <Pengangkutan />
          <Pemantauan />
          <Kendaraanonline />
          <Informasi />
        </main>

        {/* 4. Bottom Navigation */}
        <Bottomnavbar />
      </div>
    </div>
  );
}