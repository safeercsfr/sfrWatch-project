const mongoClient = require("mongodb").MongoClient;
const state = {
  db: null,
};

module.exports.connect = function (done) {
   // const url = "mongodb://localhost:27017";
  const url = 'mongodb+srv://safeermohd:safeer123@ecommerce.f6l1izv.mongodb.net/test'
  const dbname = "sfrWatch";

  mongoClient.connect(url, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};
module.exports.get = function () {
  return state.db;
};
