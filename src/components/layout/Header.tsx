'use client';
import { useState, useEffect } from 'react';
import { Bell, UserCircle } from 'lucide-react';

const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center border-t-4 border-transparent bg-clip-padding"
            style={{ borderImage: 'linear-gradient(90deg, #ef4444, #f97316, #eab308, #84cc16, #22c55e, #14b8a6, #06b6d4, #3b82f6, #8b5cf6, #d946ef, #ef4444) 1' }}>
      <div>
        <h1 className="text-xl font-semibold text-gray-700">Welcome to {userName || 'Admin'}</h1>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-brand-600 relative">
          <Bell />

          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
