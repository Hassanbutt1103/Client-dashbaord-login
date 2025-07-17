const AppError = require('../utils/appError');

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};

const sectorAccess = (sector) => {
  return (req, res, next) => {
    if (req.user.role === 'admin' || req.user.role === 'manager') return next();
    
    if (req.user.sector !== sector) {
      return next(
        new AppError('You do not have access to this sector dashboard', 403)
      );
    }
    next();
  };
};

module.exports = { restrictTo, sectorAccess };