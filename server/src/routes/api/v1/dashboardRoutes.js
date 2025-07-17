const express = require('express');
const router = express.Router();
const dashboardController = require('../../../controllers/dashboardController');
const authController = require('../../../controllers/authController');
const rbac = require('../../../middleware/rbac');

// All routes require authentication
router.use(authController.protect);

// General overview - accessible to all roles
router.get('/overview', dashboardController.getOverview);

// Financial dashboard - only finance sector and admins/managers
router.get('/financial', 
  rbac.sectorAccess('finance'), 
  dashboardController.getFinancialDashboard
);

// Engineering dashboard
router.get('/engineering',
  rbac.sectorAccess('engineering'),
  dashboardController.getEngineeringDashboard
);

// Admin-only routes
router.use(rbac.restrictTo('admin', 'manager'));

router.get('/admin-stats', dashboardController.getAdminStats);

module.exports = router;