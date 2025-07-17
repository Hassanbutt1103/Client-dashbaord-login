const express = require('express');
const userRoutes = require('./src/routes/api/v1/userRoutes');

const app = express();

app.use(express.json());

// Mount user routes
app.use('/api/v1/users', userRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

module.exports = app;
