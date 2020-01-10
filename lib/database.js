//const lib = require("./helper")

/*--- Database Helper Definition ---*/
lib.database = {};

/**
 * it creates and returns the database pass into it as an argument.
 */
const createDb = (lib.database.createDb = (
  dbName,
  database,
  url,
  config,
  options
) => {
  if (database == undefined) {
    database = localStorage;
    return database;
  } else if ((database = "MongoDB")) {
    if (url != null) {
      const MongoClient = require("mongodb").MongoClient;

      // Connect to the server.
      MongoClient.connect(url, function(err, client) {
        if (err == null) {
          console.error("Error: ", e);
          client.close();
        }
        return client.db(dbName);
      });
    }
  } else if (database == "firebase") {
    if (config !== null && isObject(config)) {
      firebase.initializeApp(config);
      dbName = firebase.database();
      return dbName;
    }
  }
});
