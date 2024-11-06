import React from 'react';
import { Settings, X, Plus, RotateCcw } from 'lucide-react';

interface EventProps {
  title: string;
  time: string;
  duration: string;
  color: string;
}

const Event = ({ title, time, duration, color }: EventProps) => (
  <div className={`p-4 rounded-lg mb-3 ${color}`}>
    <h3 className="text-[#e8eaed] text-sm font-medium">{title}</h3>
    <div className="text-[#9aa0a6] text-sm mt-1">
      {time} · {duration}
    </div>
  </div>
);

export default function CalendarView() {
  return (
    <div className="h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-[#35363a]">
        <h2 className="text-[#e8eaed] text-sm font-medium">CALENDAR</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#35363a] rounded-full">
            <Settings className="w-4 h-4 text-[#e8eaed]" />
          </button>
          <button className="p-2 hover:bg-[#35363a] rounded-full">
            <X className="w-4 h-4 text-[#e8eaed]" />
          </button>
        </div>
      </header>

      {/* Date Header */}
      <div className="flex items-center justify-between p-4">
        <h3 className="text-[#e8eaed] text-lg">Thu, 25 May</h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#35363a] rounded-full">
            <Plus className="w-4 h-4 text-[#e8eaed]" />
          </button>
          <button className="p-2 hover:bg-[#35363a] rounded-full">
            <RotateCcw className="w-4 h-4 text-[#e8eaed]" />
          </button>
        </div>
      </div>

      {/* Events */}
      <div className="p-4">
        <Event
          title="One-to-one with Fredy"
          time="17:30 - 18:30"
          duration="1 hr"
          color="bg-[#3c1f3e]"
        />
        <Event
          title="WebExtensions CG"
          time="19:00 - 20:00"
          duration="1 hr"
          color="bg-[#0f2e1d]"
        />
      </div>

      {/* Next Date */}
      <div className="mt-6">
        <h3 className="text-[#e8eaed] text-lg px-4 mb-4">Mon, 29 May</h3>
        <div className="px-4">
          <Event
            title="Manganum: weekly sync"
            time="15:00 - 16:00"
            duration="1 hr"
            color="bg-[#3c1f3e]"
          />
        </div>
      </div>
    </div>
  );
}