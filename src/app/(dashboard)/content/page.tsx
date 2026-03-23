'use client';

import { useState } from 'react';
import { 
  Send, 
  Plus, 
  History, 
  LayoutTemplate, 
  MoreHorizontal,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState('compose');

  // Mock Data
  const stats = [
    { label: 'Total Sent', value: '12.5k', icon: Send, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Templates', value: '8', icon: LayoutTemplate, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Avg. Open Rate', value: '24%', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  ];

  const history = [
    { id: 1, title: 'Summer Service Offer', sent: '2 hrs ago', status: 'Delivered', audience: 'All Users' },
    { id: 2, title: 'System Maintenance', sent: '1 day ago', status: 'Delivered', audience: 'Premium' },
    { id: 3, title: 'New Feature Alert', sent: '3 days ago', status: 'Failed', audience: 'Drivers' },
  ];

  const templates = [
    { id: 1, title: 'Service Reminder', body: 'Hi [Name], your vehicle [Vehicle] is due for service on [Date].', tags: ['Service', 'Automated'] },
    { id: 2, title: 'Insurance Expiry', body: 'Urgent: Your insurance for [Vehicle] expires in 7 days. Renew now.', tags: ['Urgent', 'Renewal'] },
    { id: 3, title: 'Welcome Message', body: 'Welcome to MotorBrage! Start by adding your first vehicle.', tags: ['Onboarding'] },
  ];

  return (
    <div className="p-8 bg-gray-50/50 min-h-screen font-sans space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Campaign Manager</h1>
           <p className="text-gray-500 text-sm mt-1">Create, manage and track your communications.</p>
        </div>
        <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
                Export Report
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium shadow-lg shadow-gray-200 hover:bg-gray-800 transition-all flex items-center gap-2">
                <Plus size={16} /> New Template
            </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {stats.map((stat, idx) => (
             <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                 <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                     <stat.icon size={24} />
                 </div>
                 <div>
                     <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                     <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                 </div>
             </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Main Compose Area */}
         <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
                    <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <Send size={18} className="text-gray-400" /> 
                        Compose Notification
                    </h2>
                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">System Online</span>
                </div>
                
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Campaign Title</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Winter Sale" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Target Audience</label>
                            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                <option>All Registered Users</option>
                                <option>Active Subscribers</option>
                                <option>Inactive (30+ Days)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Message Content</label>
                        <div className="relative">
                            <textarea 
                                rows={5} 
                                placeholder="Write your message here..." 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                            ></textarea>
                            <div className="absolute bottom-3 right-3 text-xs text-gray-400">0/160</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                             <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <Clock size={16} /> Schedule
                             </button>
                             <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <LayoutTemplate size={16} /> Save as Template
                             </button>
                        </div>
                        <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
                            <Send size={18} /> Send Campaign
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent History List */}
             <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <History size={18} className="text-gray-400" /> Recent History
                </h3>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {history.map((item, idx) => (
                        <div key={item.id} className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${idx !== history.length - 1 ? 'border-b border-gray-100' : ''}`}>
                             <div className="flex items-center gap-4">
                                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                     {item.status === 'Delivered' ? <CheckCircle size={18} /> : <Zap size={18} />}
                                 </div>
                                 <div>
                                     <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                                     <p className="text-xs text-gray-500">{item.audience} • {item.sent}</p>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.status === 'Delivered' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {item.status}
                                </span>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={18} />
                                </button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

         </div>

         {/* Templates Sidebar */}
         <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
                 <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                     <h2 className="font-bold text-gray-800 flex items-center gap-2">
                        <LayoutTemplate size={18} className="text-gray-400" /> 
                        Templates
                    </h2>
                    <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
                 </div>
                 
                 <div className="p-6 space-y-4 flex-1">
                     {templates.map(template => (
                         <div key={template.id} className="group p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                             <div className="flex justify-between items-start mb-2">
                                 <h3 className="font-semibold text-gray-900 text-sm">{template.title}</h3>
                                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                     <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-medium">Use</button>
                                 </div>
                             </div>
                             <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">"{template.body}"</p>
                             <div className="flex gap-2">
                                 {template.tags.map(tag => (
                                     <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">#{tag}</span>
                                 ))}
                             </div>
                         </div>
                     ))}
                     
                     <div className="p-6 mt-4 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center space-y-2 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                             <Plus size={20} />
                         </div>
                         <p className="text-sm font-medium text-gray-600">Create Custom Template</p>
                     </div>
                 </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContentPage;
