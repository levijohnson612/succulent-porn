import { database } from '../config/settings'
import { MongoClient } from 'mongodb'

var db;

module.exports = function(callback) {
  if (db) {
    callback(null, db);
  }
  else {
    MongoClient.connect(`mongodb://${database.url}:${database.port}`, function(error, database) {
      if (error) throw error
      db = database;
      callback(error, db);
    });
  }
}
