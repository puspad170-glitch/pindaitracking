"use client";

import { Gauge, Clock, Fuel, Navigation, Milestone, BatteryMedium } from "lucide-react";
import { ReactNode } from "react";

interface StatBoxProps {
  icon: ReactNode;
  color: string;
  label: string;
  value: string;
  unit: string;
  showBar?: boolean;
  barValue?: number;
}

function StatBox({ icon, color, label, value, unit, showBar, barValue }: StatBoxProps) {
  return (
    <div className="bg-[#F7F9FC] rounded-xl p-3">
      <div className="flex items-center gap-2 mb-1.5">
        <div
          className="w-[26px] h-[26px] rounded-lg flex items-center justify-center text-white"
          style={{ background: color }}
        >
          {icon}
        </div>
        <div className="text-[11px] font-semibold text-[#8a8f99]">{label}</div>
      </div>
      <div className="text-base font-extrabold text-[#1a1a2e]">
        {value} <span className="text-[11px] font-medium text-[#8a8f99]">{unit}</span>
      </div>
      {showBar && (
        <div className="w-full h-1.5 bg-[#E9ECF1] rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-[#1B8A4A] rounded-full"
            style={{ width: `${barValue ?? 0}%` }}
          />
        </div>
      )}
    </div>
  );
}

interface StatistikProps {
  speed?: number;
  engineHours?: number;
  fuelLevel?: number;
  tripDistance?: number;
  totalDistance?: number;
  gpsBattery?: number;
}

export default function Statistik({
  speed = 35,
  engineHours = 54.6,
  fuelLevel = 92,
  tripDistance = 49.7,
  totalDistance = 580,
  gpsBattery = 95,
}: StatistikProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="text-[13px] font-bold text-[#5b6270] uppercase tracking-wide mb-2.5">
        Statistik Kendaraan
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <StatBox
          icon={<Gauge size={13} />}
          color="#1E88E5"
          label="Kecepatan"
          value={String(speed)}
          unit="km/jam"
        />
        <StatBox
          icon={<Clock size={13} />}
          color="#7E57C2"
          label="Engine Hours"
          value={String(engineHours)}
          unit="jam"
        />
        <StatBox
          icon={<Fuel size={13} />}
          color="#FB8C00"
          label="Fuel Level"
          value={String(fuelLevel)}
          unit="Liter"
        />
        <StatBox
          icon={<Navigation size={13} />}
          color="#26A69A"
          label="Trip Distance"
          value={String(tripDistance)}
          unit="km"
        />
        <StatBox
          icon={<Milestone size={13} />}
          color="#5C6BC0"
          label="Total Distance"
          value={String(totalDistance)}
          unit="km"
        />
        <StatBox
          icon={<BatteryMedium size={13} />}
          color="#43A047"
          label="GPS Battery"
          value={String(gpsBattery)}
          unit="%"
          showBar
          barValue={gpsBattery}
        />
      </div>
    </div>
  );
}