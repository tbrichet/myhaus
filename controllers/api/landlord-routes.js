const router = require('express').Router();
const { Landlord, Tenant, Property } = require('../../models');

// GET ALL LANDLORDS
router.get('/', (req, res) => {
    Landlord.findAll({
      attributes: 
      [
        'id',
        'first_name',
        'last_name',
        'email',
      ],
      include: [
        {
        model: Property,
        attributes: ['id', 'pet', 'maintenance', 'address']
        }
      ]
    })
    .then(dbLandlordData => res.json(dbLandlordData))
    .catch(err => res.status(404).json(err))
  });
  
  // GET SPECIFIC LANDLORD
  router.get('/:id', (req, res) => {
    Landlord.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
        model: Property,
        attributes: ['id', 'pet', 'maintenance', 'address']
        },
        {
        model: Tenant,
        attributes: ["first_name", "last_name", "email"]
        }
      ]
    })
    .then(dbLandlordData => {
      if(!dbLandlordData){
        res.status(404).json({ message: 'No landlord found!'});
      return;
      }
      res.json(dbLandlordData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  // CREATE A NEW LANDLORD
  router.post('/', (req, res) => {
    Landlord.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      property_id: req.body.property_id
    })
    .then(dbLandlordData => {
      req.session.save(() => {
        req.session.landlord_id = dbLandlordData.id;
        req.session.email = dbLandlordData.email;
        req.session.loggedIn = true;
    
        res.json(dbLandlordData);
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  // EDIT LANDLORD DATA
  router.put('/:id', (req, res) => {
    Landlord.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbLandlordData => {
      if (!dbLandlordData) {
        res.status(404).json({ message: 'Error, please try again.'});
        return;
      }
      res.json(dbLandlordData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  // LANDLORD LOGIN 
  router.post('/login', (req, res) => {

    // expects {email, password}
    Landlord.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbLandlordData => {
      if (!dbLandlordData) {
        res.status(400).json({ message: 'No landlord found with that e-mail address!'})
        return;
      }

      const validPassword = dbLandlordData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

      req.session.save(() => {
        req.session.landlord_id = dbLandlordData.id;
        req.session.email = dbLandlordData.email;
        req.session.loggedIn = true;

        res.json({ user: dbLandlordData, message: 'You are now logged in!'});
      });
    });
});

   // LANDLORD LOGOUT
   router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });

  // DELETE LANDLORD
  router.delete('/:id', (req, res) => {
    Landlord.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbLandlordData => {
      if (!dbLandlordData) {
        res.status(404).json({ message: 'Landlord not found!'});
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
  