const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

let _db;

module.exports = {
  connectToMongoDB: async function (callback) {
    try {
      // Connect to MongoDB
      await client.connect();
      _db = client.db("employees"); // Replace "employees" with your database name
      console.log("Successfully connected to MongoDB.");

      return callback(null);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      return callback(error);
    }
  },

  getDb: function () {
    if (!_db) {
      throw new Error("Database not initialized. Call connectToMongoDB first.");
    }
    return _db;
  },
};
