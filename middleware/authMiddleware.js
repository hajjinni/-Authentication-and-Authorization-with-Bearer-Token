const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Token failed" });
  }
};

module.exports = protect;