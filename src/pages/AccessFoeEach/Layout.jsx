import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="min-h-screen h-full">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className={`flex-1 overflow-auto transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-72'}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 