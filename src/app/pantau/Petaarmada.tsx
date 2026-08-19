import React from 'react';

interface PetaArmadaProps {
  mapQuery?: string;
}

export default function Petaarmada({ mapQuery = '-6.5971,106.7949' }: PetaArmadaProps) {
  return (
    <div className="absolute inset-0 z-0 bg-slate-200">
      <iframe
        key={mapQuery}
        title="Lokasi Armada Fullscreen"
        src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}