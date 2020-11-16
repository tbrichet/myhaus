const router = require('express').Router();

const tenantRoutes = require('./tenant-routes')
const landlordRoutes = require('./landlord-routes')
const propertyRoutes = require('./property-routes')
const postRoutes = require('./post-routes')
const petRoutes = require('./pet-routes')

router.use('/tenant', tenantRoutes)
router.use('/landlord', landlordRoutes)
router.use('/property', propertyRoutes)
router.use('/post', postRoutes)
router.use('/pet', petRoutes)

module.exports = router