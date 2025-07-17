const User = require('../models/User');
const AppError = require('../utils/appError');

// Admin-only user management
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    // Only admins can create managers/admins
    if (['admin', 'manager'].includes(req.body.role) && req.user.role !== 'admin') {
      throw new AppError('Only admins can create admin/manager users', 403);
    }
    
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    
    res.status(201).json({
      status: 'success',
      data: { user: newUser }
    });
  } catch (error) {
    next(error);
  }
};

// Add other CRUD operations as needed