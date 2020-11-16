const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, Landlord, Tenant } = require('../models');

// DISPLAY MAINTENANCE REQUESTS
router.get("/", (req, res) => {
    Post.findAll({
      where: {
        landlord_id: req.session.landlord_id
      },
      attributes: [
        'id',
        'title',
        'description',
        'created_at'
      ],
      include: [
        {
          model: Landlord,
          attributes: ['id', 'first_name', 'last_name', 'email'],
        },
        {
          model: Tenant,
          attributes: ['first_name', 'last_name', 'email']
        }
      ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('maintenance', { 
          layout: "main",
          posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


  module.exports = router;