'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  Users, 
  Bell, 
  TrendingUp, 
  Activity, 
  ArrowUp,
  ArrowDown,
  Calendar
} from 'lucide-react';

const appUsageData = [
  { name: 'Jan', users: 2400, active: 1800 },
  { name: 'Feb', users: 1398, active: 980 },
  { name: 'Mar', users: 9800, active: 3908 },
  { name: 'Apr', users: 3908, active: 2800 },
  { name: 'May', users: 4800, active: 3800 },
  { name: 'Jun', users: 3800, active: 2900 },
  { name: 'Jul', users: 4300, active: 3300 },
];

const reminderActivityData = [
  { name: 'MOT Due', value: 400 },
  { name: 'Insurance', value: 300 },
  { name: 'Road Tax', value: 300 },
  { name: 'Service', value: 200 },
];

const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
        <p className="text-sm font-semibold text-gray-800 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-500 capitalize">{entry.name}:</span>
            <span className="font-medium text-gray-900">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const StatCard = ({ title, value, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
    <div className="flex items-center gap-2 mt-4 text-sm">
      <span className={`flex items-center font-medium ${
        trend >= 0 ? 'text-green-600' : 'text-red-600'
      }`}>
        {trend >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {Math.abs(trend)}%
      </span>
      <span className="text-gray-400">vs last month</span>
    </div>
  </div>
);

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
          <p className="text-gray-500 mt-1">Monitor your app performance and user activities</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm text-gray-600">
          <Calendar size={16} className="text-gray-400" />
          <span>Last 30 Days</span>
        </div>
      </div>

      {/* Stats Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value="12,450" 
          trend={12.5} 
          icon={Users} 
          color="bg-indigo-500 shadow-indigo-200"
        />
        <StatCard 
          title="Active Reminders" 
          value="3,200" 
          trend={8.2} 
          icon={Bell} 
          color="bg-pink-500 shadow-pink-200"
        />
        <StatCard 
          title="Conversion Rate" 
          value="24.8%" 
          trend={-2.4} 
          icon={Activity} 
          color="bg-amber-500 shadow-amber-200"
        />
        <StatCard 
          title="Total Growth" 
          value="+28%" 
          trend={14.6} 
          icon={TrendingUp} 
          color="bg-emerald-500 shadow-emerald-200"
        />
      </div>

      {/* Charts Section - Vertical Stack */}
      <div className="space-y-6">
        
        {/* Main Growth Chart */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900">User Growth & Activity</h2>
              <p className="text-sm text-gray-500">Monthly user engagement trends</p>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={appUsageData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  name="Total Users"
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="active" 
                  name="Active Users"
                  stroke="#ec4899" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorActive)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reminder Category Chart */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Reminder Distribution</h2>
          <p className="text-sm text-gray-500 mb-8">Breakdown of active vehicle reminders</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={reminderActivityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {reminderActivityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-gray-900">1.2k</span>
                <span className="text-sm text-gray-400">Total</span>
              </div>
            </div>

            {/* Custom Legend */}
            <div className="grid grid-cols-2 gap-4">
              {reminderActivityData.map((entry, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{entry.name}</p>
                    <p className="text-xs text-gray-500">{entry.value} reminders</p>
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

export default AnalyticsPage;
