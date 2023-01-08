const mongodb = require('../db/connect');
var ObjectId = require('mongodb').ObjectId;
const collection = "contacts";

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341-database").collection(collection).find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res, next) => {

  const result = await mongodb.getDb().db("cse341-database").collection(collection).find(
    {
      "_id": ObjectId(req.params.id)
    }
  );

  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });

};

module.exports = { getAllContacts, getContactById };