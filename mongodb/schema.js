const mongoose = require('mongoose')
const Schema = mongoose.Schema

let insertDataSchema = new Schema({
      
      "Name": String,
      "Mail": String,
      "Opinion": String
})
module.exports = mongoose.model('insertData',insertDataSchema)
