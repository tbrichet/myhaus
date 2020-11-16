const router = require('express').Router();
const sequelize = require('../../config/config');
const { Post, Landlord, Tenant, } = require('../../models');

// GET ALL POSTS (MAINTENANCE REQUESTS)
router.get('/', (req, res) => {
  Post.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'title',
      'description',
      'created_at'
    ],
   })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET SPECIFIC POST (MAINTENANCE REQUEST)
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: 
    ['id',
     'title', 
     'created_at'
    ],
    include: [
        {
            model: Landlord,
            attributes: ['email']
        },
      {
        model: Tenant,
        attributes: ['email']
      },
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message : 'No request found with this id.'})
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE NEW MAINTENANCE REQUEST
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    tenant_id: req.body.tenant_id,
    landlord_id: req.body.landlord_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE A POST (MAINTENANCE REQUEST)
router.put('/:id', (req, res) => {
  Post.update(
    {
    title: req.body.title,
    description: req.body.description,
    landlord_id: req.body.landlord_id,
    tenant_id: req.body.tenant_id
  },
  {
    where: {
      id: req.params.id
    }
  }
  )
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No request found with this id' })
      return;
    }
    res.json(dbPostData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// DELETE A POST (MAINTENANCE REQUEST)
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'no post found with this id' });
      return;
    }
    res.json(dbPostData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})



module.exports = router;
