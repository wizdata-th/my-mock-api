const db = require('../db.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const newData = JSON.parse(body);
      db.users.push(newData);
      res.status(201).json(newData);
    });
    
  } else {
    res.json(db);
  }
};
