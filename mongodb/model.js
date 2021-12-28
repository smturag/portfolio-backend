
const express = require('express')
const router = express.Router()
const insertData = require('./schema')
const bodyParser = require('body-parser')
router.use(express.urlencoded({extended: true}));
router.use(express.json())



const postData = async function(req,res,next){
      const DataInsert = new insertData(req.body)
      console.log(DataInsert)

      try{
            let insertedData = await DataInsert.save()
           return res.json(insertedData)
      }
      catch(err){
            return res.send(err)

      }

      }

      const getAllData = async function(req,res,next){
            try{
                  let getData= await insertData.find()
                  console.log(getData)
                  return res.json(getData)

            }
            catch(err){
                  console.log(err)
            }

      }
      const deleteData = async function(req,res,next){
            try{
                  let a = req.params.id
                  console.log(a)
                  let getData = await insertData.findByIdAndRemove(req.params.id)
                  console.log(getData)
                  return res.json(getData)

            }
            catch(err){
                  console.log(err)
            }

      }
      router.post('/insertData',postData).get('/findData',getAllData).delete('/delete/:id',deleteData)


module.exports = router