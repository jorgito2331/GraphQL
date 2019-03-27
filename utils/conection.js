const mongoose = require('mongoose')

const uri = "mongodb+srv://jorge:Admin1234@cluster0-p3sxk.mongodb.net/test?retryWrites=true";
const connectDb = () => mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true })

module.exports = {
  connectDb
}