'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Users,
  Car,
  BarChart,
  FileText,
  Settings,
  CreditCard,
  Bell,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: 'Nazmul Alam',
    email: 'alam11@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  useEffect(() => {
    // Function to load user data
    const loadUserData = () => {
      const storedName = localStorage.getItem('userName');
      const storedEmail = localStorage.getItem('userEmail');
      const storedAvatar = localStorage.getItem('userAvatar');
      
      if (storedName || storedEmail || storedAvatar) {
        setUser({
          name: storedName || 'Nazmul Alam',
          email: storedEmail || 'alam11@gmail.com',
          avatar: storedAvatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        });
      }
    };

    // Load initial data
    loadUserData();

    // Listen for storage changes (cross-tab) or custom events
    const handleStorageChange = () => {
      loadUserData();
    };

    window.addEventListener('storage', handleStorageChange);
    // Also listen for a custom event for same-tab updates
    window.addEventListener('user-profile-update', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('user-profile-update', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    router.push('/');
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-rgb-gradient bg-[length:200%_auto] animate-background-pan">Dashboard</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/users"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <Users className="mr-3" />
          User Management
        </Link>
        <Link
          href="/vehicles"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <Car className="mr-3" />
          Vehicle Data
        </Link>
        <Link
          href="/analytics"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <BarChart className="mr-3" />
          Analytics
        </Link>
        <Link
          href="/content"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <FileText className="mr-3" />
          Content Management
        </Link>
        <Link
          href="/subscriptions"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <CreditCard className="mr-3" />
          Subscriptions
        </Link>
        <Link
          href="/settings"
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
        >
          <Settings className="mr-3" />
          Settings
        </Link>
      </nav>

      {/* User Profile & Logout Section */}
      <div className="p-4 border-t border-gray-700 mt-auto bg-gray-900/50">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-600 mb-3 overflow-hidden border-2 border-gray-500 shadow-lg">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{user.name}</h3>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
        >
          <LogOut className="mr-2" size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};


export default Sidebar;
