
import React, { useState } from 'react';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

type Order = {
  id: string;
  storeId: string;
  createdAt: string;
  customerName: string;
  customerDocument: string;
  orderStatus: string;
  paymentStatus: string;
  paymentMethod: string;
  total: string;
};

type OrdersTableProps = {
  orders: Order[];
  totalPages: number;
};

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    pages.push(
      <button 
        key="first" 
        onClick={() => handlePageChange(1)} 
        disabled={currentPage === 1}
        className="p-2 mx-1 text-gray-600 hover:text-azsuite-coral disabled:opacity-50"
        aria-label="Primeira página"
      >
        <ChevronFirst className="h-4 w-4" />
      </button>
    );
    
    pages.push(
      <button 
        key="prev" 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="p-2 mx-1 text-gray-600 hover:text-azsuite-coral disabled:opacity-50"
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    );
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`p-2 w-8 h-8 mx-1 rounded-full ${
            currentPage === i
              ? 'bg-azsuite-coral text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }
    
    pages.push(
      <button 
        key="next" 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="p-2 mx-1 text-gray-600 hover:text-azsuite-coral disabled:opacity-50"
        aria-label="Próxima página"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    );
    
    pages.push(
      <button 
        key="last" 
        onClick={() => handlePageChange(totalPages)} 
        disabled={currentPage === totalPages}
        className="p-2 mx-1 text-gray-600 hover:text-azsuite-coral disabled:opacity-50"
        aria-label="Última página"
      >
        <ChevronLast className="h-4 w-4" />
      </button>
    );
    
    return pages;
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-sm animate-fade-in">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="table-header">ID do Pedido</th>
              <th className="table-header">ID na Loja</th>
              <th className="table-header">Criação</th>
              <th className="table-header">Nome do cliente</th>
              <th className="table-header">CPF/CNPJ do cliente</th>
              <th className="table-header">Status do pedido</th>
              <th className="table-header">Status do pagamento</th>
              <th className="table-header">Método de pagamento</th>
              <th className="table-header">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">#{order.id}</td>
                <td className="table-cell">#{order.storeId}</td>
                <td className="table-cell">{order.createdAt}</td>
                <td className="table-cell">{order.customerName}</td>
                <td className="table-cell">{order.customerDocument}</td>
                <td className="table-cell">{order.orderStatus}</td>
                <td className="table-cell">{order.paymentStatus}</td>
                <td className="table-cell">{order.paymentMethod}</td>
                <td className="table-cell">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        <div className="flex items-center">
          <div className="flex space-x-1">
            {renderPagination()}
          </div>
          <div className="ml-4 text-sm text-gray-500">
            {currentPage} de {totalPages} páginas
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="rows-per-page" className="text-sm text-gray-500">
            Linhas por página:
          </label>
          <select
            id="rows-per-page"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-gray-300 rounded p-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
