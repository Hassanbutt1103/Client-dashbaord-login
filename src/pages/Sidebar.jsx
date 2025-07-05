import React from 'react';
import { FaBars, FaChartPie, FaMoneyBill, FaCalculator, FaCogs, FaBuilding, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import novaLogo from '../assets/Nova Logo VP.png';

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
    <div className={`h-screen backdrop-blur-2xl border-r border-white/10 shadow-2xl flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'} relative z-20`} style={{ backgroundColor: '#1a2a33' }}> 
      {/* Logo/Avatar */}
      <div className={`flex items-center border-b border-white/10 p-6 pb-2 transition-all duration-300 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        {!collapsed && (
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => setCollapsed(true)}
          >
            <img 
              src={novaLogo} 
              alt="Nova Logo" 
              className="w-20 h-10 object-contain" 
            />
            <span className="font-extrabold text-xl text-white tracking-wide drop-shadow-lg transition-all duration-300">
              DASH VP ENGENHARIA
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none shadow ${collapsed ? 'ml-0' : 'ml-auto'}`}
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
              `flex items-center gap-3 px-5 py-3 mx-2 rounded-xl transition-colors ${collapsed ? 'justify-center' : ''} hover:bg-white/10 focus:bg-white/10' ${isActive ? 'bg-white/20' : ''}`
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
          className={`w-full flex items-center gap-3 px-5 py-3 bg-[#1a2a33] hover:bg-[#2a3a43] transition-colors rounded-xl shadow-lg border border-white/20 ${collapsed ? 'justify-center' : ''}`}
        >
          <FaSignOutAlt className="text-white" />
          <span className={`text-white ${collapsed ? 'hidden' : 'block'}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 