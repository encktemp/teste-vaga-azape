
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // API call would go here
      // For this example, we'll simulate the API call
      const response = await new Promise<{ token: string }>((resolve, reject) => {
        setTimeout(() => {
          if (email === 'teste@azape.co' && password === '123456') {
            resolve({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2ZjRlOTZjOGZmZjg1ODhlNiIsImlhdCI6MTY1NDYwN' });
          } else {
            reject(new Error('Credenciais inválidas'));
          }
        }, 1000);
      });
      
      // Store token in localStorage for future API calls
      localStorage.setItem('authToken', response.token);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Erro de autenticação",
        description: "Email ou senha incorretos.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md animate-fade-in">
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-azsuite-coral font-medium">
            E-mail
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full input-transition"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-azsuite-coral font-medium">
            Senha
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full pr-10 input-transition"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        
        <a href="#" className="block text-sm text-azsuite-coral hover:underline">
          Esqueci a senha
        </a>
        
        <Button 
          type="submit" 
          className="w-full bg-azsuite-coral hover:bg-azsuite-coral/90 text-white transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
