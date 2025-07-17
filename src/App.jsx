import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/AccessFoeEach/Layout';
import Overview from './pages/AccessFoeEach/Overview';
import Financial from './pages/AccessFoeEach/Financial';
import Accounting from './pages/AccessFoeEach/Accounting';
import Engineering from './pages/AccessFoeEach/Engineering';
import Commercial from './pages/AccessFoeEach/Commercial';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="financial" element={<Financial />} />
          <Route path="accounting" element={<Accounting />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="commercial" element={<Commercial />} />
        </Route>
        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
