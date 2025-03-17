import { useState } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react"; // Ícone de fechar

const PasswordRecoveryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Instruções enviadas para: ${email}`);
    handleClose();
  };

  return (
    <>
      {/* Link que abre o modal */}
      <a 
        href="#" 
        className="block text-sm text-azsuite-coral hover:underline" 
        onClick={handleOpen}
      >
        Esqueci a senha
      </a>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            
            {/* Ícone de fechar */}
            <button 
              onClick={handleClose} 
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Recuperar senha
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Não se preocupe! Basta informar o seu email abaixo que enviaremos as instruções para recuperação de senha.
            </p>

            {/* Formulário */}
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full input-transition"
                />
              </div>

              {/* Botão de recuperação */}
              <div className="flex justify-end mt-4">
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm bg-azsuite-coral text-white rounded hover:bg-opacity-90"
                >
                  Recuperar senha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordRecoveryModal;
