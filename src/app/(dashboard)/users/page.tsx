'use client';

import { useState, useMemo } from 'react';
import { MoreVertical, Edit, Trash, Eye, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';

type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor';
  status: 'Active' | 'Inactive';
  lastLogin: string;
  avatar: string;
};

// Expanded mock data for users to make pagination meaningful
const users: User[] = [
  { id: 1, name: 'Zahid Hasan', email: 'zahid.hasan@example.com', role: 'Admin', status: 'Active', lastLogin: '2026-03-24T10:00:00Z', avatar: 'ZH' },
  { id: 2, name: 'Fatima Ahmed', email: 'fatima.ahmed@example.com', role: 'User', status: 'Active', lastLogin: '2026-03-23T12:30:00Z', avatar: 'FA' },
  { id: 3, name: 'Samir Khan', email: 'samir.khan@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2026-03-20T08:45:00Z', avatar: 'SK' },
  { id: 4, name: 'Ayesha Chowdhury', email: 'ayesha.c@example.com', role: 'User', status: 'Active', lastLogin: '2026-03-24T11:20:00Z', avatar: 'AC' },
  { id: 5, name: 'Rahim Ali', email: 'rahim.ali@example.com', role: 'User', status: 'Active', lastLogin: '2026-03-22T14:00:00Z', avatar: 'RA' },
  { id: 6, name: 'Nusrat Jahan', email: 'nusrat.jahan@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-03-21T18:00:00Z', avatar: 'NJ' },
  { id: 7, name: 'Imran Hossain', email: 'imran.hossain@example.com', role: 'User', status: 'Inactive', lastLogin: '2026-03-19T09:00:00Z', avatar: 'IH' },
  { id: 8, name: 'Sadia Islam', email: 'sadia.islam@example.com', role: 'Admin', status: 'Active', lastLogin: '2026-03-24T09:30:00Z', avatar: 'SI' },
  { id: 9, name: 'Tariq Anwar', email: 'tariq.anwar@example.com', role: 'User', status: 'Active', lastLogin: '2026-03-23T16:45:00Z', avatar: 'TA' },
  { id: 10, name: 'Maria Akter', email: 'maria.akter@example.com', role: 'User', status: 'Inactive', lastLogin: '2026-03-18T20:00:00Z', avatar: 'MA' },
  { id: 11, name: 'Farhan Siddique', email: 'farhan.s@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-03-22T11:50:00Z', avatar: 'FS' },
  { id: 12, name: 'Jannatul Ferdous', email: 'jannatul.f@example.com', role: 'User', status: 'Active', lastLogin: '2026-03-24T13:00:00Z', avatar: 'JF' },
];

const ITEMS_PER_PAGE = 10;

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-6">
      <span className="text-sm text-gray-600">
        Showing <span className="font-semibold">{Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}</span> to <span className="font-semibold">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of <span className="font-semibold">{totalItems}</span> users
      </span>
      <div className="flex items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="mx-4 text-sm">
          Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};


const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return users.slice(startIndex, endIndex);
  }, [currentPage]);

  const getStatusBadge = (status: 'Active' | 'Inactive') => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAvatarColor = (char: string) => {
    const colors = ['bg-brand-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const index = (char.charCodeAt(0) % colors.length);
    return colors[index];
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-light-bg min-h-full">
      <div className="flex justify-between items-center mb-8 opacity-0 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-dark-bg">User Management</h1>
        {/* <button className="flex items-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95">
          <UserPlus size={18} className="mr-2" />
          Add User
        </button> */}
      </div>
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Role</th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Last Login</th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedUsers.map((user, index) => (
                <tr 
                  key={user.id} 
                  className="hover:bg-gray-50 transition-colors duration-200 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 75}ms` }}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-md ${getAvatarColor(user.avatar)}`}>
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.role}</td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadge(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {new Date(user.lastLogin).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center space-x-3">
                      <button className="text-gray-400 hover:text-brand-600 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-green-600 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <Pagination
            currentPage={currentPage}
            totalItems={users.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
