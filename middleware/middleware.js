const globalMiddleware = (req, res, next) => {
  console.log("This is globalmiddleware");
  next();
};

const authmiddleware = (req, res, next) => {
  console.log("This is auth middleware");
  next();
};

module.exports = { authmiddleware, globalMiddleware };
