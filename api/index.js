// สร้าง Mock API ง่ายๆ
module.exports = (req, res) => {
  res.json({ 
    message: 'Hello from free API!',
    data: {
      users: [],
      timestamp: new Date().toISOString()
    }
  });
};
