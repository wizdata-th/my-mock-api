const db = require('../db.json');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const newUser = req.body;
    db.users.push(newUser);
    return res.status(201).json(newUser);
  }
  
  res.json(db);
};
