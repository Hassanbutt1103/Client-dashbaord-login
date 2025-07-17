import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';

// Mock data for Bar Chart (Sales by Product)
const productData = [
  { name: 'Product A', Sales: 1200 },
  { name: 'Product B', Sales: 900 },
  { name: 'Product C', Sales: 1500 },
  { name: 'Product D', Sales: 700 },
  { name: 'Product E', Sales: 1100 },
];

// Mock data for Pie Chart (Customer Types/Regions)
const customerData = [
  { name: 'Retail', value: 40 },
  { name: 'Wholesale', value: 30 },
  { name: 'Online', value: 20 },
  { name: 'Other', value: 10 },
];

const regionData = [
  { name: 'North', value: 35 },
  { name: 'South', value: 25 },
  { name: 'East', value: 20 },
  { name: 'West', value: 20 },
];

// Mock data for Line Chart (Monthly Sales Trends)
const salesTrendData = [
  { name: 'Jan', Sales: 3000 },
  { name: 'Feb', Sales: 3500 },
  { name: 'Mar', Sales: 4000 },
  { name: 'Apr', Sales: 3700 },
  { name: 'May', Sales: 4200 },
  { name: 'Jun', Sales: 4500 },
  { name: 'Jul', Sales: 4800 },
];

const COLORS = ['#2563eb', '#10b981', '#f59e42', '#f43f5e', '#a78bfa', '#fbbf24'];

const Commercial = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart: Sales by Product */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Sales by Product</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Bar dataKey="Sales" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart: Customer Types (can swap with regionData for regions) */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Customer Types</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#2563eb"
                label={{ fill: '#fff', fontWeight: 'bold' }}
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart: Monthly Sales Trends */}
      <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10 mt-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-white">Monthly Sales Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesTrendData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line type="monotone" dataKey="Sales" stroke="#10b981" strokeWidth={3} dot={{ r: 5, fill: '#2563eb' }} activeDot={{ r: 8, fill: '#f59e42' }} />
          </LineChart>
        </ResponsiveContainer>
    </div>
  </div>
);
};

export default Commercial; 