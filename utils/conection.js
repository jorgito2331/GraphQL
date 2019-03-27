const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://root:123456789@cluster0-p3sxk.mongodb.net/test?retryWrites=true'
const connectDb = () => mongoose.connect(DB_URL, { useCreateIndex: true, useNewUrlParser: true })

module.exports = {
  connectDb
}