import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !userType) {
      setError('Please enter email, password, and select a user type.');
      return;
    }
    // User type/email/password validation
    const credentials = {
      Admin: { email: 'admin@gmail.com', password: 'admin1103' },
      Manager: { email: 'manager@gmail.com', password: 'manager1103' },
      Sector: { email: 'sector@gmail.com', password: 'sector1103' },
    };
    const selected = credentials[userType];
    if (
      !selected ||
      username.toLowerCase() !== selected.email ||
      password !== selected.password
    ) {
      setError(`Email and password do not match for ${userType}.`);
      return;
    }
    setError('');
    // Redirect to dashboard after successful login
    navigate('/overview');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile: Full background image, card overlay */}
      <div className="md:hidden fixed inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(20, 20, 40, 0.7), rgba(20, 20, 40, 0.7)), url('/372748-PC42NW-151.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }} />
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black md:static fixed inset-0 z-10">
        <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-black/20 md:bg-black/90 p-10 rounded-2xl shadow-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-full max-w-md flex flex-col items-center m-8">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gray-800 rounded-full p-4 mb-3 shadow-md">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-1 text-center w-full">Thefni's Dashboard</h2>
            <p className="text-gray-300 text-sm">Welcome back! Please login to your account.</p>
          </div>
          {error && <div className="mb-4 text-red-400 text-sm w-full text-center">{error}</div>}
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-gray-200" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-gray-200" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block mb-1 font-semibold text-gray-200" htmlFor="userType">User Type</label>
            <select
              id="userType"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select user type</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Sector">Sector</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition-all text-lg mb-2"
          >
            Login
          </button>
          <div className="text-gray-500 text-xs mt-4">&reg;2025 CNTL C&amp;V</div>
        </form>
      </div>
      {/* Border Line and Right Background for Desktop */}
      <div className="hidden md:block w-px bg-gray-300 h-screen" />
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 20, 40, 0.7), rgba(20, 20, 40, 0.7)), url('/372748-PC42NW-151.jpg')`,
            backgroundSize: '110%',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Login; 