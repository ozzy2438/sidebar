import React from 'react';
import { 
  Maximize2, 
  Languages, 
  Calendar, 
  Clock, 
  User2, 
  History,
  Grid,
  MessageSquare,
  Settings,
  UserCircle
} from 'lucide-react';

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const NavItem = ({ icon: Icon, isActive, onClick }: { 
  icon: React.ElementType;
  isActive?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#35363a] transition-colors
      ${isActive ? 'bg-[#35363a]' : ''}`}
  >
    <Icon className="w-5 h-5 text-[#e8eaed]" />
  </button>
);

export default function Navigation({ activeView, onViewChange }: NavigationProps) {
  return (
    <nav className="w-16 bg-[#202124] border-r border-[#35363a] py-2 flex flex-col items-center gap-1">
      <NavItem 
        icon={Maximize2}
        onClick={() => onViewChange('expand')}
      />
      <NavItem 
        icon={Languages}
        onClick={() => onViewChange('translate')}
      />
      <NavItem 
        icon={Calendar}
        isActive={activeView === 'calendar'}
        onClick={() => onViewChange('calendar')}
      />
      <NavItem 
        icon={Clock}
        onClick={() => onViewChange('timer')}
      />
      <NavItem 
        icon={User2}
        onClick={() => onViewChange('contacts')}
      />
      <NavItem 
        icon={History}
        onClick={() => onViewChange('history')}
      />
      <NavItem 
        icon={Grid}
        onClick={() => onViewChange('apps')}
      />
      <NavItem 
        icon={MessageSquare}
        onClick={() => onViewChange('messages')}
      />
      <div className="flex-1" />
      <NavItem 
        icon={Settings}
        onClick={() => onViewChange('settings')}
      />
      <NavItem 
        icon={UserCircle}
        onClick={() => onViewChange('profile')}
      />
    </nav>
  );
}
