'use client';

import { useState } from 'react';
import { Bell, Edit, Trash, PlusCircle, Send, AlertTriangle, Wrench } from 'lucide-react';

// Mock Data
const initialNotifications = [
  { id: 1, title: 'Summer Service Discount', message: 'Get 20% off on all services this summer!', sentDate: '2026-03-15', target: 'All Users' },
  { id: 2, title: 'New Feature: Live Tracking', message: 'You can now track your service status live.', sentDate: '2026-03-10', target: 'Premium Users' },
];

const initialTemplates = [
  { id: 1, name: 'MOT Reminder', template: 'Hi [User], your MOT for [Vehicle] is due on [Date]. Please book a slot soon.' },
  { id: 2, name: 'Tax Renewal', template: 'Reminder: Your road tax for [Vehicle] expires on [Date].' },
];

const initialServiceTypes = [
    { id: 1, name: 'Engine Oil Change', cost: '50', duration: '1 hour' },
    { id: 2, name: 'Tire Rotation', cost: '30', duration: '45 mins' },
    { id: 3, name: 'Full Body Wash', cost: '25', duration: '30 mins' },
];


const ContentPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [templates, setTemplates] = useState(initialTemplates);
  const [serviceTypes, setServiceTypes] = useState(initialServiceTypes);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Content Management</h1>

      {/* 1. App Notifications Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Bell className="mr-3 text-blue-500" size={28} />
          <h2 className="text-2xl font-semibold">App Notifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Send Notification Form */}
          <div>
            <h3 className="text-lg font-medium mb-2">Send New Notification</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Notification Title" className="w-full p-2 border rounded" />
              <textarea placeholder="Message" rows={4} className="w-full p-2 border rounded"></textarea>
              <select className="w-full p-2 border rounded">
                <option>All Users</option>
                <option>Premium Users</option>
                <option>Users in London</option>
              </select>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center">
                <Send size={18} className="mr-2" /> Send Notification
              </button>
            </div>
          </div>

          {/* Notification History */}
          <div>
            <h3 className="text-lg font-medium mb-2">Notification History</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {notifications.map(n => (
                <div key={n.id} className="p-3 bg-gray-50 rounded border">
                  <p className="font-bold">{n.title} <span className="text-xs font-normal text-gray-500">({n.target})</span></p>
                  <p className="text-sm text-gray-600">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.sentDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Update Reminders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <AlertTriangle className="mr-3 text-yellow-500" size={28} />
          <h2 className="text-2xl font-semibold">Reminder Templates</h2>
        </div>
        <div className="space-y-4">
          {templates.map(t => (
            <div key={t.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{t.name}</h3>
                <button className="text-blue-500 hover:text-blue-700"><Edit size={18} /></button>
              </div>
              <p className="text-gray-600 bg-gray-100 p-2 rounded mt-2 font-mono text-sm">{t.template}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Vehicle Service Types Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Wrench className="mr-3 text-green-500" size={28} />
          <h2 className="text-2xl font-semibold">Vehicle Service Types</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add Service Type Form */}
            <div>
                <h3 className="text-lg font-medium mb-2">Add New Service</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Service Name (e.g., Full Service)" className="w-full p-2 border rounded" />
                    <input type="number" placeholder="Estimated Cost (£)" className="w-full p-2 border rounded" />
                    <input type="text" placeholder="Estimated Duration (e.g., 2 hours)" className="w-full p-2 border rounded" />
                    <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 flex items-center justify-center">
                        <PlusCircle size={18} className="mr-2" /> Add Service Type
                    </button>
                </div>
            </div>
            {/* Service Types List */}
            <div>
                <h3 className="text-lg font-medium mb-2">Existing Services</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                    {serviceTypes.map(s => (
                        <div key={s.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border">
                            <div>
                                <p className="font-bold">{s.name}</p>
                                <p className="text-sm text-gray-500">Cost: £{s.cost} | Duration: {s.duration}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-blue-500 hover:text-blue-700"><Edit size={16} /></button>
                                <button className="text-red-500 hover:text-red-700"><Trash size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
