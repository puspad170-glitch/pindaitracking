'use client';

import Link from 'next/link';
import React, { useState } from 'react';
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
        <Petaarmada mapQuery={selectedVehicle?.mapQuery ?? '-6.5971,106.7949'} />

        <Trackingheader
          selectedVehicle={selectedVehicle}
          onShowList={selectedVehicle ? handleBackToList : undefined}
        />

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
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <MaterialIcon name="local_shipping" fill={true} className="text-xl" />
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
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleBackToList}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-slate-100 text-gray-700 font-bold text-xs rounded-xl border border-gray-200 shadow-2xs transition-colors"
              >
                <MaterialIcon name="arrow_back" className="text-sm" />
                Kembali ke Daftar Armada
              </button>

              <LokasiTujuanCard destination={selectedVehicle.destination} />

              {activeTab === 'tracking' ? (
                <Telemetrikendaraan vehicle={selectedVehicle} />
              ) : (
                <Filterreplay />
              )}

              <Aksiarmada
                vehicle={selectedVehicle}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          ) : (
            <DaftarArmadaAccordion onSelectVehicle={handleSelectVehicle} />
          )}
        </BottomSheet>
      </div>
    </div>
  );
}