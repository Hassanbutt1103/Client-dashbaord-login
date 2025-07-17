import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Mock data for user activity (Line Chart)
const activityData = [
  { name: 'Jan', users: 40 },
  { name: 'Feb', users: 55 },
  { name: 'Mar', users: 60 },
  { name: 'Apr', users: 48 },
  { name: 'May', users: 70 },
  { name: 'Jun', users: 65 },
  { name: 'Jul', users: 80 },
];

// Mock data for department distribution (Pie Chart)
const departmentData = [
  { name: 'Admin', value: 8 },
  { name: 'Engineering', value: 20 },
  { name: 'Financial', value: 10 },
  { name: 'HR', value: 6 },
  { name: 'Commercial', value: 7 },
  { name: 'Purchasing', value: 5 },
];

// Modern, professional color palette
const COLORS = ['#2563eb', '#10b981', '#f59e42', '#f43f5e', '#a78bfa', '#fbbf24'];

const Overview = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart: User Activity */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">User Activity (Monthly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} dot={{ r: 5, fill: '#10b981' }} activeDot={{ r: 8, fill: '#f59e42' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart: Department Distribution */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Department Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#2563eb"
                label={{ fill: '#fff', fontWeight: 'bold' }}
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview; 