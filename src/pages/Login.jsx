import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import novaLogo from '../assets/Nova Logo VP.png';

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
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#1a2a33', fontFamily: 'Inter, sans-serif' }}>
      {/* Mobile: Full background image, card overlay */}
      <div className="md:hidden fixed inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(26, 42, 51, 0.85), rgba(26, 42, 51, 0.85)), url('/372748-PC42NW-151.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }} />
      <div className="w-full md:w-1/2 flex items-center justify-center md:static fixed inset-0 z-10" style={{ backgroundColor: '#1a2a33' }}>
        <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/70 md:bg-white/80 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center m-4 md:m-8 border border-gray-200">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-3">
              <img src={novaLogo} alt="Nova Logo" className="w-28 h-16 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#1a2a33] mb-1 text-center w-full">DASH VP ENGENHARIA</h2>
            <p className="text-[#4a5a6a] text-sm">Welcome back! Please login to your account.</p>
          </div>
          {error && <div className="mb-4 text-red-400 text-sm w-full text-center">{error}</div>}
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="userType">User Type</label>
            <select
              id="userType"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select user type</option>
              <option value="Admin">Admin</option>
              <option value="Gerente">Gerente</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Engenharia">Engenharia</option>
              <option value="RH">RH</option>
              <option value="Comercial">Comercial</option>
              <option value="Compras">Compras</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1a2a33] text-white py-2.5 rounded-lg font-semibold shadow-md transition-all text-lg mb-2 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none"
          >
            Login
          </button>
          <div className="mt-2 text-[13px]" style={{ color: '#999999', fontFamily: 'Inter, sans-serif', textAlign: 'center', width: '100%' }}>
            Excelência técnica e compromisso: construindo resultados sólidos para quem entende de posto.
          </div>
        </form>
      </div>
      {/* Border Line and Right Background for Desktop */}
      <div className="hidden md:block w-px bg-gray-300 h-screen" />
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 42, 51, 0.85), rgba(26, 42, 51, 0.85)), url('/372748-PC42NW-151.jpg')`,
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