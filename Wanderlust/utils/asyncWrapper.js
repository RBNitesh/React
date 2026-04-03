function asyncWrapper(fn) {
  return (req, res, next) => {
    // Forward rejected async route handlers to Express's error middleware.
    fn(req, res, next).catch(next);
  };
}

module.exports = asyncWrapper;
