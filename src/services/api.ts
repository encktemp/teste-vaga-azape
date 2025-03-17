
import { toast } from "@/components/ui/use-toast";

export interface DashboardData {
  orders_total: number;
  orders_count: number;
  sales_total: number;
  sales_count: number;
  average_ticket: number;
  orders: Order[];
}

export interface Order {
  id?: string;
  store_id?: string;
  created_at?: string;
  customer: Customer;
  seller: Seller;
  payment: Payment;
  delivery: Delivery;
  products?: Product[];
  status?: string;
}

interface Customer {
  name: string;
  doc: string;
  email: string;
  phone: string;
}

interface Seller {
  id: string;
  name: string;
  email: string;
}

interface Payment {
  amount: number;
  original_amount: number;
  status: string;
  discount: number;
  method: string;
  transaction_id: string;
  installments: number;
  date: string;
}

interface Delivery {
  status: string;
  type: string;
  track_id: string;
  track_url: string;
  amount: number;
  delivery_forecast: string;
}

interface Product {
  id: string;
  seller_id: string;
  name: string;
  quantity: number;
  sku: string;
  image: string;
  status: string;
  price: number | null;
  discount: number;
  original_price: number;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
  email: string;
  profile: {
    name: string;
  };
  token: string;
}

const BASE_URL = "https://api.example.com"; // Replace with actual API URL

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    // In a real app, this would be a fetch call to the API
    // For demo purposes, we're simulating the API response
    if (credentials.email === 'teste@azape.co' && credentials.password === '123456') {
      return {
        id: "76f4e96c8fff8588e6",
        email: credentials.email,
        profile: {
          name: "Gabriel"
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2ZjRlOTZjOGZmZjg1ODhlNiIsImlhdCI6MTY1NDYwN"
      };
    } else {
      throw new Error("Credenciais inválidas");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const fetchDashboardData = async (startDate?: Date, endDate?: Date): Promise<DashboardData> => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    
    // In a real app, this would be a fetch call to the API
    // For demo purposes, we're simulating the API response
    return {
      orders_total: 50480.95,
      orders_count: 200,
      sales_total: 35996.42,
      sales_count: 156,
      average_ticket: 230.74,
      orders: [
        {
          id: "123456",
          store_id: "123456",
          created_at: "01/02/2022",
          customer: {
            name: "Tiago Hritz",
            doc: "007.284.213-56",
            email: "tiago.hritz@example.com",
            phone: "5551983859494"
          },
          seller: {
            id: "76f4e96c8fc8588e6",
            name: "Vendedor 1",
            email: "vendedor1@example.com"
          },
          payment: {
            amount: 1127.16,
            original_amount: 1127.16,
            status: "approved",
            discount: 0,
            method: "credit",
            transaction_id: "tx123456",
            installments: 12,
            date: "2022-02-01T10:00:00.000Z"
          },
          delivery: {
            status: "approved",
            type: "correios PAC",
            track_id: "track123456",
            track_url: "https://www.correios.com.br",
            amount: 15,
            delivery_forecast: "2022-02-10T10:00:00.000Z"
          },
          status: "Pagamento aprovado"
        },
        {
          id: "234567",
          store_id: "234567",
          created_at: "01/02/2022",
          customer: {
            name: "Tiago Hritz",
            doc: "007.284.213-56",
            email: "tiago.hritz@example.com",
            phone: "5551983859494"
          },
          seller: {
            id: "76f4e96c8fc8588e7",
            name: "Vendedor 2",
            email: "vendedor2@example.com"
          },
          payment: {
            amount: 415.98,
            original_amount: 415.98,
            status: "approved",
            discount: 0,
            method: "cash",
            transaction_id: "tx234567",
            installments: 0,
            date: "2022-02-01T11:00:00.000Z"
          },
          delivery: {
            status: "shipped",
            type: "correios SEDEX",
            track_id: "track234567",
            track_url: "https://www.correios.com.br",
            amount: 25,
            delivery_forecast: "2022-02-05T10:00:00.000Z"
          },
          status: "Enviado"
        },
        {
          id: "345678",
          store_id: "345678",
          created_at: "31/01/2022",
          customer: {
            name: "Patrícia Mesquita",
            doc: "004.283.146-34",
            email: "patricia.mesquita@example.com",
            phone: "5551983859495"
          },
          seller: {
            id: "76f4e96c8fc8588e8",
            name: "Vendedor 3",
            email: "vendedor3@example.com"
          },
          payment: {
            amount: 809.99,
            original_amount: 809.99,
            status: "approved",
            discount: 0,
            method: "pix",
            transaction_id: "tx345678",
            installments: 0,
            date: "2022-01-31T14:00:00.000Z"
          },
          delivery: {
            status: "shipped",
            type: "correios PAC",
            track_id: "track345678",
            track_url: "https://www.correios.com.br",
            amount: 20,
            delivery_forecast: "2022-02-07T10:00:00.000Z"
          },
          status: "Enviado"
        },
        {
          id: "456789",
          store_id: "456789",
          created_at: "31/01/2022",
          customer: {
            name: "Patrícia Mesquita",
            doc: "004.283.146-34",
            email: "patricia.mesquita@example.com",
            phone: "5551983859495"
          },
          seller: {
            id: "76f4e96c8fc8588e9",
            name: "Vendedor 4",
            email: "vendedor4@example.com"
          },
          payment: {
            amount: 809.99,
            original_amount: 809.99,
            status: "pending",
            discount: 0,
            method: "pix",
            transaction_id: "tx456789",
            installments: 0,
            date: "2022-01-31T16:00:00.000Z"
          },
          delivery: {
            status: "created",
            type: "correios PAC",
            track_id: "track456789",
            track_url: "https://www.correios.com.br",
            amount: 20,
            delivery_forecast: "2022-02-07T10:00:00.000Z"
          },
          status: "Criado"
        },
        {
          id: "567891",
          store_id: "567891",
          created_at: "30/01/2022",
          customer: {
            name: "Mateus Taufer",
            doc: "856.356.892-47",
            email: "mateus.taufer@example.com",
            phone: "5551983859496"
          },
          seller: {
            id: "76f4e96c8fc8588e0",
            name: "Vendedor 5",
            email: "vendedor5@example.com"
          },
          payment: {
            amount: 607.95,
            original_amount: 607.95,
            status: "approved",
            discount: 0,
            method: "bank_slip",
            transaction_id: "tx567891",
            installments: 0,
            date: "2022-01-30T10:00:00.000Z"
          },
          delivery: {
            status: "approved",
            type: "correios SEDEX",
            track_id: "track567891",
            track_url: "https://www.correios.com.br",
            amount: 30,
            delivery_forecast: "2022-02-03T10:00:00.000Z"
          },
          status: "Pagamento aprovado"
        },
        {
          id: "678910",
          store_id: "678910",
          created_at: "28/01/2022",
          customer: {
            name: "Mateus Taufer",
            doc: "856.356.892-47",
            email: "mateus.taufer@example.com",
            phone: "5551983859496"
          },
          seller: {
            id: "76f4e96c8fc8588e1",
            name: "Vendedor 6",
            email: "vendedor6@example.com"
          },
          payment: {
            amount: 1266.54,
            original_amount: 1266.54,
            status: "approved",
            discount: 0,
            method: "credit",
            transaction_id: "tx678910",
            installments: 12,
            date: "2022-01-28T15:00:00.000Z"
          },
          delivery: {
            status: "delivered",
            type: "correios SEDEX",
            track_id: "track678910",
            track_url: "https://www.correios.com.br",
            amount: 30,
            delivery_forecast: "2022-02-01T10:00:00.000Z"
          },
          status: "Entregue"
        }
      ]
    };
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
    toast({
      title: "Erro",
      description: "Não foi possível carregar os dados do dashboard.",
      variant: "destructive",
    });
    throw error;
  }
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDocumento = (doc: string): string => {
  return doc; // In a real app, you might want to format CPF/CNPJ here
};

export const getStatusColorClass = (status: string): string => {
  const statusLower = status.toLowerCase();
  
  if (statusLower.includes('aprovado') || statusLower.includes('entregue')) {
    return 'text-green-600';
  } else if (statusLower.includes('pendente') || statusLower.includes('criado')) {
    return 'text-yellow-600';
  } else if (statusLower.includes('cancelado')) {
    return 'text-red-600';
  } else {
    return 'text-blue-600';
  }
};

export const translatePaymentMethod = (method: string): string => {
  const methods: Record<string, string> = {
    'credit': 'Crédito à prazo',
    'cash': 'Crédito à vista',
    'pix': 'Pix',
    'bank_slip': 'Boleto'
  };
  
  return methods[method] || method;
};
