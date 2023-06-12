const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const Joi = require("joi")
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const collection = client.db("real").collection("orders")
exports.handler = async (event) => {
  try {
    if (true) {
        const parsed = JSON.parse(event.body)
        const numberArray = parsed.passphrase
        const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
        await numberArraySchema.validateAsync(numberArray)
        
        const message = parsed.message
        const messageSchema = Joi.string().required().max(9999)
        await messageSchema.validateAsync(message)

        const sender = parsed.sender
        const senderSchema = Joi.string().required().max(8)
        await senderSchema.validateAsync(sender)
      await collection.updateOne(
        { passphrase: numberArray.toString() },
        { $push: { customerChat: { message: message, timestamp: Date.now(), sender: sender } } }
      )
      //await client.close()
      console.log('info entered')
      return {
        statusCode: 200,
        body: ''
      }
    } else {
      console.log('wrong password')
      return {
        statusCode: 200,
        body: ''
      }
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