
import React from 'react';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left panel: Login form */}
      <div className="flex-1 flex flex-col justify-between p-8 md:p-16 lg:p-24">
        <div className="mb-12">
          <Logo />
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <LoginForm />
        </div>
        
        <div className="mt-12 text-xs text-gray-500">
          © Desenvolvido por Azape
        </div>
      </div>
      
      {/* Right panel: Background image */}
      <div className="hidden md:block flex-1 bg-login-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/24082894-3f0d-4486-97eb-f5c849c4c347.png')] bg-no-repeat bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-md mx-auto w-full">
            <div className="space-y-4">
              <div className="text-white text-2xl font-semibold">Serviços realizados</div>
              <div className="h-48 relative overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <rect x="50" y="150" width="50" height="30" className="fill-white/50" />
                  <rect x="120" y="120" width="50" height="60" className="fill-white/50" />
                  <rect x="190" y="100" width="50" height="80" className="fill-white/50" />
                  <rect x="260" y="70" width="50" height="110" className="fill-white/50" />
                  <rect x="330" y="40" width="50" height="140" className="fill-white/70" />
                  
                  <text x="75" y="170" fill="white" fontSize="10" textAnchor="middle">01 a 07 Jan</text>
                  <text x="145" y="170" fill="white" fontSize="10" textAnchor="middle">08 a 14 Jan</text>
                  <text x="215" y="170" fill="white" fontSize="10" textAnchor="middle">15 a 21 Jan</text>
                  <text x="285" y="170" fill="white" fontSize="10" textAnchor="middle">22 a 28 Jan</text>
                  <text x="355" y="170" fill="white" fontSize="10" textAnchor="middle">29 a 31 Jan</text>
                </svg>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="14" height="14" rx="1" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/5 backdrop-blur-md rounded-lg">
                <div className="text-lg font-medium text-white">6.050 Agendados</div>
                <div className="text-2xl font-semibold text-white">R$ 3.578.006,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
