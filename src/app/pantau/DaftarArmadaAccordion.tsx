'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MaterialIcon from '../components/MaterialIcon';
import { VehicleData, getVehicleGroups, sampleVehicles } from './data/vehicles';

interface DaftarArmadaAccordionProps {
  onSelectVehicle: (vehicle: VehicleData) => void;
  selectedVehicleId?: string;
}

export default function DaftarArmadaAccordion({
  onSelectVehicle,
  selectedVehicleId,
}: DaftarArmadaAccordionProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    online: true,
    perjalanan: true,
    siaga: true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const filteredVehicles = sampleVehicles.filter(
    (v) =>
      v.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.plate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groups = getVehicleGroups(filteredVehicles);

  return (
    <div className="space-y-3 pb-2">
      {/* Search & Filter Bar */}
      <div className="relative">
        <MaterialIcon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari ID armada, driver, atau plat..."
          className="w-full pl-9 pr-8 py-2 text-xs bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <MaterialIcon name="close" className="text-sm" />
          </button>
        )}
      </div>

      {/* Accordion Groups */}
      <div className="space-y-2.5">
        {groups.map((group) => {
          const isOpen = openGroups[group.id] ?? true;
          return (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-gray-100/90 shadow-xs overflow-hidden transition-all"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between p-3 bg-slate-50/70 hover:bg-slate-100/70 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <MaterialIcon name={group.icon} fill={true} className="text-xs" />
                  </div>
                  <span className="font-bold text-xs text-gray-800 tracking-tight">
                    {group.title}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${group.badgeColor}`}>
                    {group.vehicles.length}
                  </span>
                </div>

                <MaterialIcon
                  name={isOpen ? 'expand_less' : 'expand_more'}
                  className="text-gray-400 text-lg transition-transform"
                />
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="p-2 space-y-1.5 divide-y divide-gray-50">
                  {group.vehicles.length === 0 ? (
                    <p className="text-[11px] text-gray-400 text-center py-3 italic">
                      Tidak ada armada di kategori ini.
                    </p>
                  ) : (
                    group.vehicles.map((vehicle) => {
                      const isSelected = selectedVehicleId === vehicle.id;
                      return (
                        <div
                          key={vehicle.id}
                          onClick={() => onSelectVehicle(vehicle)}
                          className={`pt-1.5 first:pt-0 flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${isSelected
                              ? 'bg-blue-50/80 border border-blue-200'
                              : 'hover:bg-gray-50 border border-transparent'
                            }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Vehicle Icon Badge */}
                            <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200"> ⬅️
                             <Image                                                                                                   
                              src={vehicle.image || '/assets/Truk_2.jpeg'}                                                              
                               alt={vehicle.id}                                                                                       
                               fill                                                                                                   
                               sizes="48px"                                                                                           
                               className="object-cover"                                                                               
                               />                                                                                                       
                              </div>

                            {/* Info text */}
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-bold text-xs text-gray-900 truncate">
                                  {vehicle.id}
                                </h4>
                                <span className="text-[10px] text-gray-400 font-medium truncate">
                                  • {vehicle.plate}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-600 truncate mt-0.5">
                                Driver: <span className="font-semibold text-gray-800">{vehicle.driver}</span>
                              </p>
                              <p className="text-[10px] text-gray-400 truncate flex items-center gap-1">
                                <MaterialIcon name="near_me" className="text-[8px] text-blue-500 shrink-0" />
                                {vehicle.destination.name}
                              </p>
                            </div>
                          </div>

                          {/* Right action indicator */}
                          <div className="flex flex-col items-end gap-1 shrink-0 pl-2">
                            <span
                              className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${vehicle.status === 'online'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : vehicle.status === 'perjalanan'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-rose-100 text-rose-700'
                                }`}
                            >
                              {vehicle.statusLabel}
                            </span>
                            <span className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5">
                              Pantau <MaterialIcon name="chevron_right" className="text-xs" />
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
