
import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  count?: string;
  iconBg: string;
  icon: React.ReactNode;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, count, iconBg, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-md transition-shadow duration-300 animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className={`card-icon ${iconBg}`}>
          {icon}
        </div>
        
        <div>
          {count && <p className="text-lg font-medium text-gray-500">{count}</p>}
          <h3 className="text-lg font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
