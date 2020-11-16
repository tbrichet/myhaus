const router = require('express').Router();
const { Tenant } = require('../../models');

// GET ALL TENANTS
router.get('/', (req, res) => {
    Tenant.findAll({
      attributes: {exclude: ['password']}
    })
    .then(dbTenantData => res.json(dbTenantData))
    .catch(err => res.status(404).json(err))
  });

// GET 1 SPECIFIC TENANT
router.get('/:id', (req, res) => {
    Tenant.findOne({
      attributes: {exclude: ['password']},
      where: {
        id: req.params.id
      }
    })
    .then(dbTenantData => {
      if(!dbTenantData){
        res.status(404).json({ message: 'No tenant found!'});
      return;
      }
      res.json(dbTenantData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  // CREATE NEW TENANT
  router.post('/', (req, res) => {
    console.log(req.body)
    Tenant.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    })
    .then(dbTenantData => {
      req.session.save(() => {
        req.session.tenant_id = dbTenantData.id;
        req.session.email = dbTenantData.email;
        req.session.loggedIn = true;
    
        res.json(dbTenantData);
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });
  
  // EDIT TENANT DATA
  router.put('/:id', (req, res) => {
    Tenant.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbTenantData => {
      if (!dbTenantData) {
        res.status(404).json({ message: 'Tenant not found'});
        return;
      }
      res.json(dbTenantData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });

  // TENANT LOGIN
router.post('/login', (req, res) => {
    
    // expects {email, password}
    Tenant.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbTenantData => {
      if (!dbTenantData) {
        res.status(400).json({ message: 'No tenant found with that e-mail address!'})
        return;
      }
      const validPassword = dbTenantData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
      
      req.session.save(() => {
        req.session.tenant_id = dbTenantData.id;
        req.session.email = dbTenantData.email;
        req.session.loggedIn = true;
    
        res.json({ user: dbTenantData, message: 'You are now logged in!' });
      });
    })   
});

// TENANT LOGOUT
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
 
  
// DELETE TENANT
router.delete('/:id', (req, res) => {
    Tenant.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbTenantData => {
      if (!dbTenantData) {
        res.status(404).json({ message: 'Tenant not found!'});
        return;
      }
      res.json(dbTenantData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
  
  module.exports = router;
  