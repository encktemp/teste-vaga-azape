
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import OrdersTable from '@/components/OrdersTable';
import DateFilter from '@/components/DateFilter';
import { DashboardData, Order, fetchDashboardData, formatCurrency, formatDocumento, getStatusColorClass, translatePaymentMethod } from '@/services/api';
import { useToast } from "@/components/ui/use-toast";
import { FileText, DollarSign, BarChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      toast({
        title: "Sessão expirada",
        description: "Por favor, faça login novamente.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }
    
    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async (startDate?: Date, endDate?: Date) => {
    setIsLoading(true);
    try {
      const data = await fetchDashboardData(startDate, endDate);
      setDashboardData(data);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados do dashboard.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateChange = (startDate?: Date, endDate?: Date) => {
    loadDashboardData(startDate, endDate);
  };

  const mapOrdersToTableData = (orders: Order[]) => {
    return orders.map((order, index) => ({
      id: order.id || `${index + 1}`,
      storeId: order.store_id || `${index + 1}`,
      createdAt: order.created_at || new Date().toLocaleDateString(),
      customerName: order.customer.name,
      customerDocument: formatDocumento(order.customer.doc),
      orderStatus: order.status || 'Desconhecido',
      paymentStatus: order.payment.status === 'succeeded' || order.payment.status === 'approved' ? 'Aprovado' : 
                    order.payment.status === 'pending' ? 'Pendente' : 'Desconhecido',
      paymentMethod: translatePaymentMethod(order.payment.method),
      total: formatCurrency(order.payment.amount)
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Gabriel" />
        
        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-medium text-gray-800 mb-6">Resumo dos pedidos</h1>
          
          <div className="mb-6">
            <DateFilter onDateChange={handleDateChange} />
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azsuite-coral"></div>
            </div>
          ) : dashboardData ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard 
                  title="Pedidos" 
                  value={formatCurrency(dashboardData.orders_total)}
                  count={`${dashboardData.orders_count} Pedidos`}
                  iconBg="bg-azsuite-pink/20"
                  icon={<FileText className="h-6 w-6 text-azsuite-coral" />}
                />
                <StatCard 
                  title="Vendas" 
                  value={formatCurrency(dashboardData.sales_total)}
                  count={`${dashboardData.sales_count} Vendas`}
                  iconBg="bg-azsuite-teal/20"
                  icon={<DollarSign className="h-6 w-6 text-green-500" />}
                />
                <StatCard 
                  title="Ticket médio" 
                  value={formatCurrency(dashboardData.average_ticket)}
                  iconBg="bg-azsuite-blue/20"
                  icon={<BarChart className="h-6 w-6 text-blue-500" />}
                />
              </div>
              
              <OrdersTable 
                orders={mapOrdersToTableData(dashboardData.orders)}
                totalPages={10}
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-500">Nenhum dado disponível</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
