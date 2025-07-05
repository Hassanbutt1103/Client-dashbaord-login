import React from 'react';

const stats = [
  { label: 'Total Revenue', value: '$1,200,000' },
  { label: 'Active Users', value: '3,245' },
  { label: 'Projects', value: '27' },
  { label: 'Growth', value: '+12.5%' },
];

const Overview = () => (
  <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
    <div className="max-w-5xl mx-auto p-6">
      {/* Welcome Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome to Thefni's Dashboard</h1>
        <p className="text-blue-200 text-lg mb-2">Your advanced overview at a glance</p>
        <p className="text-gray-300">Track your business performance, users, and growth in one beautiful place.</p>
      </div>
      {/* Stats Cards */}
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
      {/* Add more advanced dashboard widgets here as needed */}
    </div>
  </div>
);

export default Overview; 