
import TrackingHeader from './Trackingheader';
import PetaArmada from './Petaarmada';
import InformasiKendaraan from './Informasikendaraan';
import TelemetriKendaraan from './Telemetrikendaraan';
import AksiArmada from './Aksiarmada';

export default function PantauPage() {
  return (
    <main className="min-h-screen bg-[#F4F6FA]">
      <div className="mx-auto max-w-md">
        <TrackingHeader />
        <PetaArmada />
        <InformasiKendaraan />
        <TelemetriKendaraan />
        <AksiArmada />
      </div>
    </main>
  );
}