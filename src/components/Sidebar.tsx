
import React from 'react';
import Logo from './Logo';
import { BarChart2 } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-[204px] bg-white border-r border-gray-200 flex flex-col animate-slide-in">
      <div className="p-6">
        <Logo />
      </div>
      
      <nav className="flex-1 mt-6">
        <a
          href="/dashboard"
          className="flex items-center space-x-2 px-6 py-3 text-azsuite-coral bg-azsuite-light-gray font-medium border-l-2 border-azsuite-coral"
        >
          <BarChart2 className="h-5 w-5" />
          <span>Dashboard</span>
        </a>
      </nav>
      
      <div className="p-6 mt-auto">
        <div className="text-xs text-gray-500">
          <a href="#" className="hover:text-azsuite-coral">Termos de Uso</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-azsuite-coral">Política de Privacidade</a>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          © Desenvolvido por Azape
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
