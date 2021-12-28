const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
const mongoose = require('mongoose');
const insertData = require('./mongodb/model')

async function start(){

  const uri =  "mongodb+srv://project_blog:project_blog@cluster0.dazku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  
    async function establish(){
      const connectionDb = mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }, (err, client) => {
        if (err) {
          return console.error(err)
        }
        else{
          console.log('Connected to Database')
          app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
          app.use(cors())
          app.use('/api',insertData)
          
        })
      }
        return connectionDb
  })
  
}
establish()
}


start()
