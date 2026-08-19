import React from 'react';
import Replayheader from './Replayheader';
import Profilepengemudi from './Profilepengemudi';
import Filterreplay from './Filterreplay';
import Bottomnavbar from './Bottomnavbar';

export default function ReplayPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24 max-w-sm mx-auto space-y-4">
     
      <Replayheader />

      <div className="px-4 space-y-4">
        
        <Profilepengemudi />

        
        <Filterreplay />
      </div>

     
      <Bottomnavbar />
    </div>
  );
}