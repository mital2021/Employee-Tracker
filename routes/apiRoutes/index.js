const express = require('express');
const router = express.Router();

router.use(require('./departmentRoutes'));
router.use(require('./employee_nameidRoutes'));
router.use(require('./employee_roleRoutes'));


module.exports = router;
