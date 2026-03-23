'use client';

import { useState } from 'react';
import { DollarSign, Users, CreditCard, Download, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

type Transaction = {
  id: string;
  user: string;
  avatar: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
};

// Expanded mock data for transactions
const transactions: Transaction[] = [
  { id: 'txn_1', user: 'Liam Johnson', avatar: 'L', date: '2026-03-24', amount: 4.99, status: 'Completed' },
  { id: 'txn_2', user: 'Olivia Smith', avatar: 'O', date: '2026-03-23', amount: 4.99, status: 'Completed' },
  { id: 'txn_3', user: 'Noah Williams', avatar: 'N', date: '2026-03-23', amount: 4.99, status: 'Pending' },
  { id: 'txn_4', user: 'Emma Brown', avatar: 'E', date: '2026-03-22', amount: 4.99, status: 'Failed' },
  { id: 'txn_5', user: 'James Jones', avatar: 'J', date: '2026-03-21', amount: 4.99, status: 'Completed' },
  { id: 'txn_6', user: 'Ava Garcia', avatar: 'A', date: '2026-03-20', amount: 4.99, status: 'Completed' },
  { id: 'txn_7', user: 'William Miller', avatar: 'W', date: '2026-03-19', amount: 4.99, status: 'Completed' },
  { id: 'txn_8', user: 'Sophia Davis', avatar: 'S', date: '2026-03-18', amount: 4.99, status: 'Pending' },
];

const StatCard = ({ icon, title, value, subValue, colorClass, iconBgClass, animationDelay }: any) => (
  <div 
    className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center space-x-4 opacity-0 animate-fade-in-up`}
    style={{ animationDelay }}
  >
    <div className={`p-3 rounded-full ${iconBgClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      {subValue && <p className="text-xs text-gray-400">{subValue}</p>}
    </div>
  </div>
);


const SubscriptionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const currentTransactions = transactions.slice(
      (currentPage - 1) * itemsPerPage, 
      currentPage * itemsPerPage
  );

  const getStatusBadge = (status: 'Completed' | 'Pending' | 'Failed') => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Failed':
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getAvatarColor = (char: string) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const index = (char.charCodeAt(0) % colors.length);
    return colors[index];
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
      <div className="flex justify-between items-center mb-8 opacity-0 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800">Subscriptions & Payments</h1>
        <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95">
          <CreditCard size={18} className="mr-2" />
          Add New Plan
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Users className="text-blue-500" />} 
          title="Total Subscribers" 
          value="1,250"
          iconBgClass="bg-blue-100"
          animationDelay="100ms"
        />
        <StatCard 
          icon={<DollarSign className="text-green-500" />} 
          title="Monthly Revenue" 
          value="$6,237.50"
          iconBgClass="bg-green-100"
          animationDelay="200ms"
        />
        <StatCard 
          icon={<TrendingUp className="text-indigo-500" />} 
          title="New Subscribers" 
          value="+82"
          subValue="in last 30 days"
          iconBgClass="bg-indigo-100"
          animationDelay="300ms"
        />
        <StatCard 
          icon={<CreditCard className="text-red-500" />} 
          title="Failed Payments" 
          value="12"
          subValue="this month"
          iconBgClass="bg-red-100"
          animationDelay="400ms"
        />
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Billing History</h2>
          <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            <Download size={16} className="mr-1" />
            Export Data
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Transaction ID</th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentTransactions.map((tx, index) => (
                <tr 
                  key={tx.id} 
                  className="hover:bg-gray-50 transition-colors duration-200 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 75}ms` }}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getAvatarColor(tx.avatar)}`}>
                        {tx.avatar}
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-800">{tx.user}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 font-mono">{tx.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{tx.date}</td>
                  <td className="py-4 px-6 font-medium text-gray-800">${tx.amount.toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadge(tx.status)}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-b-xl">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, transactions.length)}</span> of <span className="font-medium">{transactions.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === index + 1 ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
