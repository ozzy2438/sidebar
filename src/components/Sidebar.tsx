import React, { useState } from 'react';
import Navigation from './Navigation';
import CalendarView from './CalendarView';

export default function Sidebar() {
  const [activeView, setActiveView] = useState('calendar');

  return (
    <div className="flex h-screen bg-[#202124]">
      <Navigation activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1">
        <CalendarView />
      </main>
    </div>
  );
}