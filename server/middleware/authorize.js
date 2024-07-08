const authorize = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        console.log(req.user.role);
        return res.status(403).json({ message: 'Access denied1234' });
      }
      next();
    };
  };
  
module.exports = authorize;
  