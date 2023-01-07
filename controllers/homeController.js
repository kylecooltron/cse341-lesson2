const path = require('path');
const views_path = path.join(__dirname, '../views');
// const People = require("../models/people");

exports.index = (req, res) => {
  res.sendFile(path.join(views_path, 'index.html'));
};

exports.index_people_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Get People list");
};

exports.index_sign_in = (req, res) => {
  res.send("NOT IMPLEMENTED: Sign in");
};