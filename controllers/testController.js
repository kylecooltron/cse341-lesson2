const path = require('path');
const views_path = path.join(__dirname, '../views');

exports.test = (req, res) => {
  res.sendFile(path.join(views_path, 'test.html'));
};