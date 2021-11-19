const express = require('express');
const router = express.Router();


router.use(require('./departmentRoutes'));
router.use(require('./employeeNameidRoutes'));
router.use(require('./employeeRoleRoutes'));


module.exports = router;



// const router = require('express').Router();

// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).end();
// });

// module.exports = router;
