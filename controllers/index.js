const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const tenantRoutes = require('./tenant-routes.js');
const postRoutes = require('./post-routes.js');
const petRoutes = require('./pet-routes.js');

router.use('/', homeRoutes);
router.use('/tenant', tenantRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/pet', petRoutes);



router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;