import React from 'react';
import { Settings, HelpCircle, MessageSquare, Share2 } from 'lucide-react';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuItem = ({ icon, label, onClick }: MenuItemProps) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-sm group"
  >
    <span className="w-5 h-5 group-hover:text-blue-600">{icon}</span>
    <span className="group-hover:text-blue-600">{label}</span>
  </button>
);

export default function HoverMenu() {
  return (
    <div className="fixed top-2 right-2 z-50">
      <div className="group relative inline-block">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings className="w-5 h-5 text-gray-700" />
        </button>
        
        <div className="absolute right-0 top-full mt-1 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 origin-top-right">
          <div className="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 py-1">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
              EXTENSION OPTIONS
            </div>
            
            <MenuItem
              icon={<MessageSquare />}
              label="Send feedback"
              onClick={() => console.log('Feedback clicked')}
            />
            
            <MenuItem
              icon={<Share2 />}
              label="Share extension"
              onClick={() => console.log('Share clicked')}
            />
            
            <MenuItem
              icon={<HelpCircle />}
              label="Help"
              onClick={() => console.log('Help clicked')}
            />
            
            <div className="border-t border-gray-100 mt-1">
              <MenuItem
                icon={<Settings />}
                label="Extension settings"
                onClick={() => console.log('Settings clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}