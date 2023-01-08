const path = require('path');
const views_path = path.join(__dirname, '../views');

exports.index = (req, res) => {
  res.sendFile(path.join(views_path, 'index.html'));
};