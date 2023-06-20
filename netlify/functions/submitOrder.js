const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios")
const Joi = require("joi")
exports.handler = async (event, context) => {
  try {
    const params = event.body
    const parsed = JSON.parse(params)
    console.log(parsed)
    if (parsed.purchaseInfo.serviceType === '1service') {
      const returnInfo = await process1Service(parsed)
      return {
        statusCode: 200,
        body: JSON.stringify(returnInfo.data)
      }
    }
/*     if (parsed.purchase !== '12month' && parsed.purchase !== '1week' && parsed.purchase !== '3month') {
      return {
        statusCode: 500,
        body: ''
      }
    } */
    /* const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
    await numberArraySchema.validateAsync(parsed.numberArray)
    const numberArray = parsed.numberArray.toString()
    const storeAddress = 'https://btcpay.anonshop.app/api/v1/stores/' + BTCpayStore + '/invoices'
    const priceDictionary = {
      '1week': 10,
      '3month': 45,
      '12month': 120
    } */
/*     const response = await axios.post(
          storeAddress,
          {
              'amount': priceDictionary[parsed.purchase],
              'speedPolicy': 'MediumSpeed',
              'checkout': {
                  'paymentMethods': [
                      'XMR'
                  ],
                  'redirectURL': 'https://phantomphone.app/login',
                  'redirectAutomatically': true
              },
              'metadata': { 
                numberArray: numberArray,
                purchase: parsed.purchase,
                timestamp: Date.now()
               }
          },
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': BTCpayKey
              }
          }
      ) 
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    } */
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
 
}

async function process1Service(parsed) {

  const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
  await numberArraySchema.validateAsync(parsed.numberArray)
  const numberArray = parsed.numberArray.toString()

  const serviceSchema = Joi.string().min(1).max(20)
  await serviceSchema.validateAsync(parsed.service)

  const storeAddress = 'https://btcpay.anonshop.app/api/v1/stores/' + BTCpayStore + '/invoices'
  const response = await axios.post(
          storeAddress,
          {
              'amount': '2',
              'speedPolicy': 'MediumSpeed',
              'checkout': {
                  'paymentMethods': [
                      'XMR'
                  ],
                  'redirectURL': 'https://phantomphone.app/login',
                  'redirectAutomatically': true
              },
              'metadata': { 
                numberArray: numberArray,
                purchase: {
                  serviceType: '1service',
                  service: parsed.service
                },
                timestamp: Date.now()
               }
          },
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': BTCpayKey
              }
          }
  )
  return response
  
}