'use client';

import { useState } from 'react';
import { 
  Send, 
  Plus, 
  History, 
  LayoutTemplate, 
  CheckCircle,
  Clock,
  Zap,
  Search,
  Users,
  BarChart3,
  FileText,
  MessageSquare
} from 'lucide-react';

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState('compose');

  // Mock Data
  const stats = [
    { label: 'Total Sent', value: '12.5k', change: '+12%', icon: Send },
    { label: 'Avg. Open Rate', value: '24%', change: '+2.1%', icon: Zap },
    { label: 'Active Templates', value: '8', change: '0', icon: LayoutTemplate },
  ];

  const history = [
    { id: 1, title: 'Summer Service Offer', sent: '2 hrs ago', status: 'Delivered', audience: 'All Users' },
    { id: 2, title: 'System Maintenance', sent: '1 day ago', status: 'Delivered', audience: 'Premium' },
    { id: 3, title: 'New Feature Alert', sent: '3 days ago', status: 'Failed', audience: 'Drivers' },
    { id: 4, title: 'Holiday Hours', sent: '5 days ago', status: 'Delivered', audience: 'All Users' },
  ];

  const templates = [
    { id: 1, title: 'Service Reminder', body: 'Hi [Name], your vehicle [Vehicle] is due for service on [Date].', tags: ['Service'] },
    { id: 2, title: 'Insurance Expiry', body: 'Urgent: Your insurance for [Vehicle] expires in 7 days.', tags: ['Urgent'] },
    { id: 3, title: 'Welcome Message', body: 'Welcome to MotorBrage! Start by adding your first vehicle.', tags: ['Onboarding'] },
    { id: 4, title: 'Feedback', body: 'How was your recent experience with [Service Center]?', tags: ['Feedback'] },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen font-sans space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Campaigns</h1>
           <p className="text-gray-500 mt-1">Manage notifications, templates, and track history</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200 self-start sm:self-auto">
            {[
              { id: 'compose', label: 'Compose', icon: MessageSquare },
              { id: 'templates', label: 'Templates', icon: FileText },
              { id: 'history', label: 'History', icon: History }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === tab.id ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {stats.map((stat, idx) => (
             <div key={idx} className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                 <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-gray-50 rounded-xl text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon size={22} />
                     </div>
                     <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${stat.change.startsWith('+') ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {stat.change}
                     </span>
                 </div>
                 <div>
                     <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
                     <p className="text-gray-500 text-sm font-medium mt-1">{stat.label}</p>
                 </div>
             </div>
         ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/40 min-h-[600px] overflow-hidden">
         
         {/* Compose Tab */}
         {activeTab === 'compose' && (
           <div className="max-w-4xl mx-auto p-10 animate-in fade-in duration-500">
              <div className="text-center space-y-3 mb-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">New Broadcast</h2>
                  <p className="text-gray-500 max-w-lg mx-auto text-base">Create and schedule push notifications for your users. Messages are delivered instantly or at your scheduled time.</p>
              </div>

              <div className="space-y-8 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Campaign Name</label>
                        <input type="text" placeholder="e.g. Winter Check-up Promo" className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-900/5 focus:border-gray-900 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Target Audience</label>
                        <select className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-900/5 focus:border-gray-900 outline-none transition-all font-medium text-gray-800 cursor-pointer">
                            <option>All Registered Users</option>
                            <option>Active Premium Members</option>
                            <option>Inactive Users (30+ days)</option>
                        </select>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message Content</label>
                    <div className="relative">
                        <textarea rows={6} placeholder="Type your message here..." className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-900/5 focus:border-gray-900 outline-none transition-all resize-none font-medium text-gray-800 placeholder:text-gray-400"></textarea>
                        <div className="absolute right-4 bottom-4 text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                            0 / 160
                        </div>
                    </div>
                 </div>

                 <div className="flex items-center justify-between pt-6 border-t border-gray-200/60">
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-bold flex items-center gap-2 px-4 py-2 hover:bg-white rounded-lg transition-colors">
                        <Clock size={16} /> Schedule Delivery
                    </button>
                    <div className="flex gap-4">
                       <button className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all">Preview Message</button>
                       <button className="px-8 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 active:scale-95 flex items-center gap-2">
                          <Send size={18} /> Send Campaign
                       </button>
                    </div>
                 </div>
              </div>
           </div>
         )}

         {/* Templates Tab */}
         {activeTab === 'templates' && (
            <div className="p-8 animate-in fade-in duration-500">
               <div className="flex items-center justify-between mb-8">
                  <div className="relative w-80">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                     <input type="text" placeholder="Search saved templates..." className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-gray-100 focus:border-gray-300 outline-none transition-all" />
                  </div>
                  <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all flex items-center gap-2">
                     <Plus size={18} /> Create Template
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map(t => (
                     <div key={t.id} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4">
                        <div className="w-full flex justify-between items-start">
                           <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                               <FileText size={20} />
                           </div>
                           <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-bold group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">{t.tags[0]}</span>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{t.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">"{t.body}"</p>
                        </div>
                        
                        <div className="w-full pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-400">Last used: 2d ago</span>
                            <button className="text-sm text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all hover:underline translate-x-2 group-hover:translate-x-0">Use this</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}

         {/* History Tab */}
         {activeTab === 'history' && (
            <div className="animate-in fade-in duration-500">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="border-b border-gray-100 text-xs font-bold text-gray-500 uppercase bg-gray-50/80 tracking-wider">
                         <th className="px-8 py-5">Campaign Name</th>
                         <th className="px-8 py-5">Target Audience</th>
                         <th className="px-8 py-5">Sent Date</th>
                         <th className="px-8 py-5">Delivery Status</th>
                         <th className="px-8 py-5 text-right">Analytics</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                      {history.map(item => (
                         <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="px-8 py-5">
                               <div className="flex items-center gap-3">
                                   <div className={`w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                   <p className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{item.title}</p>
                               </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-500">{item.audience}</td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-500">{item.sent}</td>
                            <td className="px-8 py-5">
                               <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${item.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                                  {item.status}
                               </span>
                            </td>
                            <td className="px-8 py-5 text-right">
                               <button className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-all">
                                  <BarChart3 size={18} />
                               </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
            </div>
         )}

      </div>
    </div>
  );
};

export default ContentPage;