const router = require('express').Router();
const sequelize = require('../../config/config');
const { Pet, Landlord, Tenant, } = require('../../models');

// GET ALL PET UPDATES
router.get('/', (req, res) => {
    Pet.findAll({
        attributes: [
            'id',
            'status',
            'description',
            'created_at'
        ],
        include: [
            {
                model: Tenant,
                attributes: ['id']
            },
            {
                model: Landlord,
                attributes: ['id']
            }
        ]
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET SPECIFIC PET UPDATE
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'description',
            'created_at'
        ],
        include: [
            {
                model: Tenant,
                attributes: ['id']
            },
            {
                model: Landlord,
                attributes: ['id']
            }
        ]
    })
    .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message : 'No pet update found with this id.'})
          return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// CREATE NEW PET UPDATE
router.post('/', (req, res) => {
    Pet.create({
        status: req.body.status,
        description: req.body.description,
        tenant_id: req.body.tenant_id,
        landlord_id: req.body.landlord_id
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
  });
});

// EDIT A PET UPDATE
router.put('/:id', (req, res) => {
    Pet.update(
        {
            status: req.body.status,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No pet update found with this id' })
          return;
        }
        res.json(dbPostData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      }); 
});

// DELETE A PET UPDATE
router.delete('/:id', (req, res) => {
    Pet.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPetData => {
        if(!dbPetData) {
            res.status(404).json({ message: 'No pet update found with this id' });
            return;
        }
        res.json(dbPetData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
})

module.exports = router;