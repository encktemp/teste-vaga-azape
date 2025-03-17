import React from "react";
import { Bell, User } from "lucide-react";

type HeaderProps = {
  userName: string;
};

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div className="w-full h-16 border-b border-gray-200 flex items-center justify-end px-6 bg-white">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 mr-12">
          <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <span className="text-gray-400 font-bold text-sm">Avisos</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-right">
            <div className="text-sm text-gray-500">Olá,</div>
            <div className="font-medium">{userName}</div>
          </div>

          <div className="h-10 w-10 rounded-full bg-azsuite-coral text-white flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
