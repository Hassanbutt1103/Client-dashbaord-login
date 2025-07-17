import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// Mock data for Gauge Chart (System Load/Uptime)
const gaugeValue = 78; // e.g., 78% uptime
const gaugeData = [
  { name: 'Uptime', value: gaugeValue },
  { name: 'Down', value: 100 - gaugeValue },
];
const GAUGE_COLORS = ['#10b981', '#334155'];

// Mock data for Line Chart (Project Progress)
const progressData = [
  { name: 'Week 1', Progress: 10 },
  { name: 'Week 2', Progress: 25 },
  { name: 'Week 3', Progress: 40 },
  { name: 'Week 4', Progress: 55 },
  { name: 'Week 5', Progress: 70 },
  { name: 'Week 6', Progress: 85 },
  { name: 'Week 7', Progress: 100 },
];

// Mock data for Bar Chart (Issue/Task Counts by Engineer)
const engineerData = [
  { name: 'Alice', Issues: 5, Tasks: 12 },
  { name: 'Bob', Issues: 2, Tasks: 9 },
  { name: 'Charlie', Issues: 7, Tasks: 15 },
  { name: 'Diana', Issues: 3, Tasks: 10 },
];

const BAR_COLORS = ['#2563eb', '#f59e42'];

const Engineering = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gauge Chart: System Load/Uptime */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4 text-white">System Uptime</h2>
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={gaugeData}
                startAngle={180}
                endAngle={0}
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
                stroke="none"
              >
                {gaugeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GAUGE_COLORS[index % GAUGE_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-3xl font-extrabold text-green-400 mt-[-60px]">{gaugeValue}%</div>
          <div className="text-gray-300">Uptime</div>
        </div>

        {/* Line Chart: Project Progress */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Project Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" domain={[0, 100]} />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Line type="monotone" dataKey="Progress" stroke="#2563eb" strokeWidth={3} dot={{ r: 5, fill: '#10b981' }} activeDot={{ r: 8, fill: '#f59e42' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: Issue/Task Counts by Engineer */}
        <div className="bg-[#232b3a] rounded-xl shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-white">Issues & Tasks by Engineer</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engineerData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ background: '#232b3a', border: '1px solid #334155', color: '#fff' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Bar dataKey="Issues" fill={BAR_COLORS[0]} radius={[6, 6, 0, 0]} />
              <Bar dataKey="Tasks" fill={BAR_COLORS[1]} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Engineering; 