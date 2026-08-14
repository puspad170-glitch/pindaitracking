import React from 'react';
import ReplayHeader from './Replayheader';
import ProfilePengemudi from './Profilepengemudi';
import FilterReplay from './Filterreplay';
import BottomNavbar from './Bottomnavbar';

export default function ReplayPerjalanan() {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-slate-50 min-h-screen pb-24 shadow-2xl relative overflow-hidden flex flex-col">

       
        <ReplayHeader />

        <div className="p-4 space-y-4">

          <ProfilePengemudi />

        
          <FilterReplay />

        </div>

      
        <BottomNavbar />

      </div>
    </div>
  );
}