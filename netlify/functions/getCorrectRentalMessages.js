const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const Joi = require("joi")
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const collection = client.db("real").collection("orders")
const phoneDumpCollection = client.db("real").collection("phonedump")
const phoneInfoCollection = client.db("real").collection("phonesInfo")
exports.handler = async (event) => {
  try {
    const parsed = JSON.parse(event.body)
    const numberArray = parsed.passphrase
    const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
    await numberArraySchema.validateAsync(numberArray)
    const info = await collection.findOne({ passphrase: numberArray.toString() })
    const chosenPhone = info.chosenPhone
    const serviceInfo = info.allOrderInformation.orderInfo.metadata.purchase

/*     console.log(chosenPhone)
    console.log(serviceInfo) */
    const phoneDatabase = await phoneDumpCollection.findOne({ phone: chosenPhone.phoneName })
    const simCorrectMessages = []
    const finalArray = []
    // correct sim check
    for (let message of phoneDatabase.messageArray) {
      if (message.sim === chosenPhone.sim) {
        simCorrectMessages.push(message)
      }
    }
    // messagecontent check
    for (let message of  simCorrectMessages) {
      if (message.text.includes(serviceInfo.service)) {
        finalArray.push(message)
      }
      if (message.text.includes(serviceInfo.service.toLowerCase())) {
        finalArray.push(message)
      }
      if (message.text.includes(serviceInfo.service.toUpperCase())) {
        finalArray.push(message)
      }
    }
    // get phone number
    const phoneNumbereDatabase = await phoneInfoCollection.findOne({ phone: chosenPhone.phoneName })
    return {
        statusCode: 200,
        body: JSON.stringify( { messages: finalArray, phoneNumber: phoneNumbereDatabase[chosenPhone.sim].phoneNumber})
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