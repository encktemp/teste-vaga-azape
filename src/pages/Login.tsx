import React from "react";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Painel esquerdo: Formulário de login */}
      <div className="w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24">
        <div className="mb-12">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <LoginForm />
        </div>

        <div className="absolute bottom-4 left-4 text-xs text-gray-500">
          © Desenvolvido por Azape
        </div>
      </div>

      {/* Painel direito: Imagem de fundo */}
      <div className="hidden md:block w-1/2 bg-login-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imagem.png')] bg-no-repeat bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Login;
