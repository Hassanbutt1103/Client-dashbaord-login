// In src/utils/authUtils.js
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    
    res.cookie('jwt', token, cookieOptions);
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          sector: user.sector
        }
      },
      // Include accessible dashboards based on role
      accessibleDashboards: getAccessibleDashboards(user.role, user.sector)
    });
  };
  
  function getAccessibleDashboards(role, sector) {
    const allDashboards = ['overview', 'financial', 'engineering', 'hr', 'commercial', 'admin'];
    
    if (role === 'admin') return allDashboards;
    if (role === 'manager') return allDashboards.filter(d => d !== 'admin');
    
    return ['overview', sector]; // Sector users only get overview + their sector
  }