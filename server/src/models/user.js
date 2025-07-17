const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const roles = ['admin', 'manager', 'engineering', 'hr', 'finance', 'commercial'];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: roles,
    default: 'engineering' // Default role for new users
  },
  sector: {
    type: String,
    enum: ['engineering', 'hr', 'finance', 'commercial', 'general'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Password hashing middleware remains same as previous
// Add instance methods as needed