import React from 'react';
import { FaBars, FaChartPie, FaMoneyBill, FaCalculator, FaCogs, FaBuilding, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'General Overview', icon: <FaChartPie className="text-white" />, path: '/overview' },
  { name: 'Financial Dashboard', icon: <FaMoneyBill className="text-white" />, path: '/financial' },
  { name: 'Accounting Dashboard', icon: <FaCalculator className="text-white" />, path: '/accounting' },
  { name: 'Engineering Dashboard', icon: <FaCogs className="text-white" />, path: '/engineering' },
  { name: 'Commercial Dashboard', icon: <FaBuilding className="text-white" />, path: '/commercial' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear session logic here if needed
    navigate('/');
  };
  return (
    <div className={`h-screen backdrop-blur-2xl bg-black/80 border-r border-white/10 shadow-2xl flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'} relative z-20`}> 
      {/* Logo/Avatar */}
      <div className="flex items-center gap-3 p-6 pb-2 border-b border-white/10">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-2 shadow-lg">
          <FaUserCircle className="text-white" size={collapsed ? 28 : 40} />
        </div>
        <span className={`font-extrabold text-xl text-white tracking-wide drop-shadow-lg transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>Thefni's Dashboard</span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none shadow"
        >
          <FaBars size={22} className="text-white" />
        </button>
      </div>
      <nav className="flex-1 mt-4 space-y-1">
        {navLinks.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 mx-2 rounded-xl transition-colors ${collapsed ? 'justify-center' : ''} hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:bg-gradient-to-r focus:from-purple-600 focus:to-blue-600' ${isActive ? 'bg-gradient-to-r from-purple-700 to-blue-700' : ''}`
            }
          >
            {link.icon}
            <span className={`font-medium tracking-wide text-white ${collapsed ? 'hidden' : 'block'}`}>{link.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto mb-6 px-2">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors rounded-xl shadow-lg ${collapsed ? 'justify-center' : ''}`}
        >
          <FaSignOutAlt className="text-white" />
          <span className={`text-white ${collapsed ? 'hidden' : 'block'}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 