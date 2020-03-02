module.exports = {
    // database: "mongodb://localhost/olympia" ,  //process.env.MONGODB_URI,
    database: process.env.MONGODB_URI,  //process.env.DB_URI,
    // database: "mongodb://heroku_1s73v3gc:5grjap7u1go9v33f1aj9cr5i3e@ds111478.mlab.com:11478/heroku_1s73v3gc",
    secret: "secret" //process.env.SECRET
}