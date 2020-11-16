const withAuth = (req, res, next) => {
  if (!req.session.tenant_id || !req.session.landlord_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
