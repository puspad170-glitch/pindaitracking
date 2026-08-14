import Navbar from './components/Navbar';
import StatusArmada from './components/Statusarmada';
import Pengangkutan from './components/Pengangkutan';
import Pemantauan from './components/Pemantauan';
import KendaraanOnline from './components/Kendaraanonline';
import Statistik from './components/Statistik';
import Informasi from './components/Informasi';
import BottomNavbar from './components/Bottomnavbar';

export default function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-slate-50 min-h-screen pb-24 shadow-2xl relative">
        <Navbar />
        
        <div className="p-4 space-y-4 -mt-4">
          <StatusArmada />
          <Pengangkutan />
          <Pemantauan />
          <KendaraanOnline />
          <Statistik />
          <Informasi />
        </div>

        <BottomNavbar />
      </div>
    </div>
  );
}