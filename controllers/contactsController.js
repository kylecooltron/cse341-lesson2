const mongodb = require('../db/connect');
var ObjectId = require('mongodb').ObjectId;
const collection = "contacts";

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341-database").collection(collection).find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContact = async (req, res, next) => {

  if (req.query.hasOwnProperty("id")){
    const result = await mongodb.getDb().db("cse341-database").collection(collection).find(
      {
        "_id": ObjectId(req.query["id"])
      }
    );
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });

  }else{
      res.status(400).json("No contact id found")
  }

};

module.exports = { getContact, getContacts };