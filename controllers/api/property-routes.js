const router = require('express').Router();
const { Landlord, Tenant, Property } = require('../../models');

// GET ALL PROPERTIES
router.get('/', (req, res) => {
    Property.findAll({
      attributes: 
      [
        'id',
        'maintenance',
        'address',
        'complex',
        'unit',
        'rent'
      ],
      include: [
        {
          model: Tenant,
          attributes: ['id','first_name','last_name', 'email']
        },
        {
          model: Landlord,
          attributes: ['id','first_name','last_name', 'email']
        }
      ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.status(404).json(err))
});

// GET SPECIFIC PROPERTY
  router.get('/:id', (req, res) => {
    Property.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Tenant,
          attributes: ['id','first_name','last_name', 'email']
        }
      ]
    })
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(404).json({ message: 'Think before you type no categories here...'});
      return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });

  // CREATE NEW PROPERTY
  router.post('/', (req, res) => {
    Property.create({
        address: req.body.address,
        complex: req.body.complex,
        maintenance: req.body.maintenance,
        property_id: req.body.property_id,
        landlord_id: req.session.landlord_id,
        tenant_id: req.body.tenant_id,
        rent: req.body.rent,
        unit: req.body.unit
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'follow the category entry format, dummy'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });

// EDIT PROPERTY (LANDLORD)
router.put('/:id', (req, res) => {
  
    Property.update(req.body, {
      
      where: {
        id: req.params.id
        
      }
    })
    .then(affectedRows => {
      if (affectedRows > 0) {
  
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

// EDIT PROPERTY (TENANT)
router.put('/edit/:id', (req, res) => {
    req.body.tenant_id = req.session.tenant_id
    Property.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'nope try again'});
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

// DELETE PROPERTY
router.delete('/:id', (req, res) => {
    Property.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'you cant delete something that doesnt exist...'});
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
  
  module.exports = router;
  