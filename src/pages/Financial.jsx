import React from 'react';

const stats = [
  { label: 'Total Expenses', value: '$850,000' },
  { label: 'Net Profit', value: '$350,000' },
  { label: 'Cash Flow', value: '$120,000' },
  { label: 'ROI', value: '8.2%' },
];

const Financial = () => (
  <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Financial Dashboard</h1>
        <p className="text-purple-200 text-lg mb-2">Track your financial performance and key metrics</p>
        <p className="text-gray-300">Monitor expenses, profit, and ROI in a beautiful dashboard.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-6 shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white flex flex-col items-center"
          >
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className="text-md font-medium tracking-wide uppercase text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Financial; 