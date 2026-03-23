'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { User, Mail, Lock, Save, Camera, CheckCircle } from 'lucide-react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    // Load initial data from localStorage
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    const storedAvatar = localStorage.getItem('userAvatar');

    setFormData(prev => ({
      ...prev,
      name: storedName || 'Nazmul Alam',
      email: storedEmail || 'alam11@gmail.com'
    }));
    
    setAvatar(storedAvatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');
  }, []);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Basic validation
    if (!formData.name || !formData.email) {
      setError('Name and Email are required.');
      return;
    }

    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    // Mock API call simulation
    setTimeout(() => {
        setSuccessMessage('Profile updated successfully!');
        
        // Update local storage (mock persistence)
        if(formData.name) localStorage.setItem('userName', formData.name);
        if(avatar) localStorage.setItem('userAvatar', avatar); // Save avatar

        // Dispatch a custom event so other components (like Sidebar) can update
        window.dispatchEvent(new Event('user-profile-update'));

    }, 1000);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8 opacity-0 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      </div>

      <div className="space-y-8">
        
        {/* Top Row - Profile Summary */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
           <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="relative pt-12">
                   <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100 group">
                      <img 
                        src={avatar || "/placeholder-avatar.png"} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                      <label htmlFor="avatar-upload" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white">
                         <Camera size={24} />
                      </label>
                      <input 
                        type="file" 
                        id="avatar-upload" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                   </div>
                   <h2 className="mt-4 text-xl font-bold text-gray-800">{formData.name}</h2>
                   <p className="text-sm text-gray-500">{formData.email}</p>
                   <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Active Account
                  </div>
                </div>
           </div>
        </div>


        {/* Bottom Row - Profile Form */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
               <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <User size={20} className="mr-2 text-indigo-500" />
                  Profile Information
               </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                            <User size={16} className="mr-2 text-gray-400" /> Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Mail size={16} className="mr-2 text-gray-400" /> Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            disabled
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none"
                        />
                    </div>
                </div>

                 <hr className="border-gray-200 my-4" />
                 
                 <div className="space-y-4">
                    <h4 className="text-md font-medium text-gray-800 flex items-center">
                         <Lock size={18} className="mr-2 text-indigo-500" /> Change Password
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="Leave blank to keep current"
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>
                 </div>

                 {/* Feedback Messages */}
                 {successMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center animate-fade-in">
                        <CheckCircle size={20} className="mr-2" />
                        {successMessage}
                    </div>
                 )}
                 
                 {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg animate-fade-in">
                        {error}
                    </div>
                 )}

                 {/* Submit Button */}
                 <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        <Save size={18} className="mr-2" />
                        Save Changes
                    </button>
                 </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
