var express = require('express');
var router = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


router.get('/', function(req, res) {
  let db_connect = dbo.getDb("hack");
  db_connect
    .collection("post")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = router;
