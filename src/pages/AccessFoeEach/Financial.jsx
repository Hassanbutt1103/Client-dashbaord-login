import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Mock data for Revenue vs. Expenses (Bar Chart)
const barData = [
  { name: 'Jan', Revenue: 12000, Expenses: 8000 },
  { name: 'Feb', Revenue: 15000, Expenses: 9000 },
  { name: 'Mar', Revenue: 14000, Expenses: 9500 },
  { name: 'Apr', Revenue: 17000, Expenses: 11000 },
  { name: 'May', Revenue: 16000, Expenses: 10500 },
  { name: 'Jun', Revenue: 18000, Expenses: 12000 },
  { name: 'Jul', Revenue: 20000, Expenses: 13000 },
];

// Mock data for Monthly Financial Trends (Line Chart)
const lineData = [
  { name: 'Jan', Profit: 4000 },
  { name: 'Feb', Profit: 6000 },
  { name: 'Mar', Profit: 4500 },
  { name: 'Apr', Profit: 6000 },
  { name: 'May', Profit: 5500 },
  { name: 'Jun', Profit: 6000 },
  { name: 'Jul', Profit: 7000 },
];

// Mock data for Budget Allocation (Donut/Pie Chart)
const budgetData = [
  { name: 'Salaries', value: 40 },
  { name: 'Operations', value: 25 },
  { name: 'Marketing', value: 15 },
  { name: 'R&D', value: 10 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#2563eb', '#10b981', '#f59e42', '#f43f5e', '#a78bfa'];

const Financial = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart: Revenue vs. Expenses */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Revenue vs. Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Bar dataKey="Revenue" fill="#2563eb" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Expenses" fill="#f43f5e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut/Pie Chart: Budget Allocation */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Budget Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#2563eb"
                label={{ fill: '#fff', fontWeight: 'bold' }}
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart: Monthly Financial Trends */}
      <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10 mt-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-white">Monthly Financial Trends (Profit)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line type="monotone" dataKey="Profit" stroke="#10b981" strokeWidth={3} dot={{ r: 5, fill: '#2563eb' }} activeDot={{ r: 8, fill: '#f59e42' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial; 