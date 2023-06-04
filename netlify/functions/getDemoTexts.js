const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const collection = client.db("demo").collection("demo")
exports.handler = async (event) => {
  try {
    const textObjectDirty = await collection.findOne(
        { _id: 69 }, { projection : { messageArray: { $slice: -50 } }}
      )
    const cleanTexts = []
    for (const element of textObjectDirty.messageArray) {
        let holderObject = {}
        holderObject.text = element.text
        holderObject.sentStamp = element.sentStamp
        holderObject.receivedStamp = element.receivedStamps
        holderObject.from = element.from.slice(0, -4) + 'XXXX'
        cleanTexts.push(holderObject)
    }
    return {
        statusCode: 200,
        body: JSON.stringify(cleanTexts)
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

async function getText(){
  // const docInfo = {_id: 69, messageArray: [] }
  // await collection.insertOne(docInfo) 
  const test = await collection.findOne(
    { _id: 69 }, { projection : { messageArray: { $slice: -50 } }}
  )
 // await client.close()
  return test
 
}