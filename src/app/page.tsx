'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Statistik from './components/Statistik';
import Statusarmada from './components/Statusarmada';
import Pengangkutan from './components/Pengangkutan';
import Pemantauan from './components/Pemantauan';
import Kendaraanonline from './components/Kendaraanonline';
import Informasi from './components/Informasi';
import Bottomnavbar from './components/Bottomnavbar';

export default function DashboardPage() {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">

      <div className="relative w-full max-w-md bg-white min-h-screen shadow-sm pb-24">
        <Navbar />

        <Statistik />
        <main className="px-2 space-y-4 pt-2">
          <Statusarmada />
          <Pengangkutan />
          <Pemantauan />
          <Kendaraanonline />
          <Informasi />
        </main>

        <Bottomnavbar />
      </div>
    </div>
  );
}