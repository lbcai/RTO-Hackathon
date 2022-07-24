const { MongoClient } = require("mongodb");
const config = require("../config");
const Db = config.dbUrl;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      console.log("Attempting to connect to MongoDB.");
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("hack");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};
