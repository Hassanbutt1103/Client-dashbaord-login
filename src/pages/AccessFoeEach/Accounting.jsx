import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts';

// Mock data for Stacked Bar Chart (Assets & Liabilities)
const barData = [
  { name: 'Jan', Assets: 20000, Liabilities: 8000 },
  { name: 'Feb', Assets: 22000, Liabilities: 9000 },
  { name: 'Mar', Assets: 21000, Liabilities: 9500 },
  { name: 'Apr', Assets: 25000, Liabilities: 11000 },
  { name: 'May', Assets: 24000, Liabilities: 10500 },
  { name: 'Jun', Assets: 26000, Liabilities: 12000 },
  { name: 'Jul', Assets: 27000, Liabilities: 13000 },
];

// Mock data for Area Chart (Cash Flow)
const areaData = [
  { name: 'Jan', CashFlow: 5000 },
  { name: 'Feb', CashFlow: 7000 },
  { name: 'Mar', CashFlow: 6000 },
  { name: 'Apr', CashFlow: 8000 },
  { name: 'May', CashFlow: 7500 },
  { name: 'Jun', CashFlow: 9000 },
  { name: 'Jul', CashFlow: 9500 },
];

// Mock data for transaction logs (Table)
const transactions = [
  { date: '2024-07-01', description: 'Invoice Payment', amount: 1200, type: 'Credit' },
  { date: '2024-07-02', description: 'Office Supplies', amount: -300, type: 'Debit' },
  { date: '2024-07-03', description: 'Salary', amount: -5000, type: 'Debit' },
  { date: '2024-07-04', description: 'Client Payment', amount: 3500, type: 'Credit' },
  { date: '2024-07-05', description: 'Utilities', amount: -400, type: 'Debit' },
  { date: '2024-07-06', description: 'Consulting Income', amount: 2000, type: 'Credit' },
];

const COLORS = ['#2563eb', '#f43f5e'];

const Accounting = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Stacked Bar Chart: Assets & Liabilities */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Assets & Liabilities</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Bar dataKey="Assets" stackId="a" fill="#2563eb" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Liabilities" stackId="a" fill="#f43f5e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart: Cash Flow */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Cash Flow Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Area type="monotone" dataKey="CashFlow" stroke="#10b981" fill="#10b981" fillOpacity={0.3} strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table: Transaction Logs */}
      <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10 mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-white">Transaction Logs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-200">
            <thead className="bg-[#181f2a] text-gray-100">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={idx} className="border-b border-[#334155]">
                  <td className="px-4 py-2 whitespace-nowrap">{tx.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{tx.description}</td>
                  <td className={`px-4 py-2 whitespace-nowrap font-bold ${tx.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>{tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `$${tx.amount}`}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{tx.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accounting; 