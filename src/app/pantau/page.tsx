import React from 'react';
import Trackingheader from './Trackingheader';
import Petaarmada from './Petaarmada';
import Informasikendaraan from './Informasikendaraan';
import Telemetrikendaraan from './Telemetrikendaraan';
import Aksiarmada from './Aksiarmada';

export default function PantauPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24 max-w-sm mx-auto space-y-4">
    
      <Trackingheader />

     
      <div className="px-4 space-y-4">
        <Petaarmada />
        <Informasikendaraan />
        <Telemetrikendaraan />
        <Aksiarmada />
      </div>
    </div>
  );
}