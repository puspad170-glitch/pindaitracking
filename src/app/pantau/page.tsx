'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import Image from 'next/image';
import MaterialIcon from '../components/MaterialIcon';
import Trackingheader from './Trackingheader';
import Petaarmada from './Petaarmada';
import Informasikendaraan from './Informasikendaraan';
import Telemetrikendaraan from './Telemetrikendaraan';
import Filterreplay from './Filterreplay';
import Aksiarmada from './Aksiarmada';
import LokasiTujuanCard from './LokasiTujuanCard';
import DaftarArmadaAccordion from './DaftarArmadaAccordion';
import BottomSheet from './BottomSheet';
import { VehicleData, sampleVehicles } from './data/vehicles';

export default function PantauPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleData | null>(null);
  const [activeTab, setActiveTab] = useState<'tracking' | 'replay'>('tracking');
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);

  const handleSelectVehicle = (vehicle: VehicleData) => {
    setSelectedVehicle(vehicle);
    setIsSheetExpanded(true);
  };

  const handleBackToList = () => {
    setSelectedVehicle(null);
    setIsSheetExpanded(true);
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-900 antialiased font-sans">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden bg-slate-100">
        {/* Fullscreen Map Background */}
        <Petaarmada mapQuery={selectedVehicle?.mapQuery ?? '-6.5971,106.7949'} />

        {/* Floating Header on Map */}
        <Trackingheader
          selectedVehicle={selectedVehicle}
          onShowList={selectedVehicle ? handleBackToList : undefined}
        />

        {/* Swipeable Bottom Sheet */}
        <BottomSheet
          isExpanded={isSheetExpanded}
          onExpandedChange={setIsSheetExpanded}
          peekContent={
            selectedVehicle ? (
              <Informasikendaraan
                vehicle={selectedVehicle}
                onBackToList={handleBackToList}
                showSwitchButton={true}
              />
            ) : (
             <div
    onClick={() => setIsSheetExpanded(true)}
    className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:border-blue-200 transition-colors"
  >
    <div className="flex items-center gap-3">
     
      <div className="relative w-12 h-11 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
        <Image
          src="/assets/Truk_2.jpeg"
          alt="Daftar Armada"
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-extrabold text-gray-900 text-sm">
          Daftar Armada ({sampleVehicles.length})
        </h3>
       
      </div>
    </div>
  </div>
            )
          }
        >
          {selectedVehicle ? (
            /* Vehicle Detail View */
            <div className="space-y-3">
              {/* Back to List Button */}
              <button
                type="button"
                onClick={handleBackToList}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-slate-100 text-gray-700 font-bold text-xs rounded-xl border border-gray-200 shadow-2xs transition-colors"
              >
                <MaterialIcon name="arrow_back" className="text-sm" />
                Kembali ke Daftar Armada
              </button>

              {/* Destination Card */}
              <LokasiTujuanCard destination={selectedVehicle.destination} />

              {/* Dynamic Telemetry or Replay Filter */}
              {activeTab === 'tracking' ? (
                <Telemetrikendaraan vehicle={selectedVehicle} />
              ) : (
                <Filterreplay />
              )}

              {/* Fleet Actions */}
              <Aksiarmada
                vehicle={selectedVehicle}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          ) : (
            /* Grouped Accordion Vehicle List */
            <DaftarArmadaAccordion
              onSelectVehicle={handleSelectVehicle}
            />
          )}
        </BottomSheet>
      </div>
    </div>
  );
}