const MongoClient = require('mongodb').MongoClient

const state = {
  db: null,
}

exports.connect = (url, done) => {
  if (state.db) return done()
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return done(err)
    // state.db = client.db('olympia')
    state.db = client.db(process.env.MONGO_DB_NAME |"heroku_1s73v3gc")
    done()
  })
}

exports.getCollection = (collectionName) =>  state.db.collection(collectionName)

exports.getDB = () => state.db

exports.close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}