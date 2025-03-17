import React from "react";
import Logo from "./Logo";
import { BarChart2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const Sidebar: React.FC = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div className="h-auto w-[204px] bg-white border-r p-2 border-gray-200 flex flex-col animate-slide-in">
      {/* Logo */}
      <div className="p-6 flex justify-center">
        <Logo />
      </div>

      {/* Menu principal */}
      <nav className="flex-1 mt-6">
        <a
          href="/dashboard"
          className="flex items-center space-x-2 px-6 py-3 text-white bg-azsuite-coral font-medium border-l-2 border-azsuite-coral rounded-lg"
        >
          <BarChart2 className="h-5 w-5" />
          <span>Dashboard</span>
        </a>
      </nav>

      {/* Menu Sair no Rodapé */}
      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 w-full text-azsuite-coral font-bold hover:opacity-80"
        >
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
