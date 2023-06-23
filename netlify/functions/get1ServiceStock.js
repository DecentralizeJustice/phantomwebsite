const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const Joi = require("joi")
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const phoneInfoCollection = client.db("real").collection("phonesInfo")
exports.handler = async (event) => {
  const phoneMap = []
  try {
    const phoneInfo = await phoneInfoCollection.find().toArray()
    for (const phone of phoneInfo) {
      const tempObject = {
        sim1: ['all'],
        sim2: ['all']
      }
      if (phone.sim1.phoneNumber.length > 5) { 
        tempObject.sim1 = phone.sim1.usedServices
      }
      if (phone.sim2.phoneNumber.length > 5) { 
        tempObject.sim2 = phone.sim2.usedServices
      }
      phoneMap.push(tempObject)
    }
    return {
        statusCode: 200,
        body: JSON.stringify(phoneMap)
      } 
  } 
  catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
}