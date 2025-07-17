exports.getOverview = async (req, res, next) => {
    try {
      // General data accessible to all roles
      const overviewData = {
        welcomeMessage: `Welcome, ${req.user.name}`,
        role: req.user.role,
        sector: req.user.sector,
        lastLogin: req.user.lastLogin
      };
      
      res.status(200).json({
        status: 'success',
        data: overviewData
      });
    } catch (error) {
      next(error);
    }
  };
  
  exports.getFinancialDashboard = async (req, res, next) => {
    try {
      // Financial data logic here
      const financialData = {
        /* sector-specific data */
      };
      
      res.status(200).json({
        status: 'success',
        data: financialData
      });
    } catch (error) {
      next(error);
    }
  };
  
  // Similar methods for other dashboards (engineering, hr, etc.)