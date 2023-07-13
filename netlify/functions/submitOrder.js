const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios")
const Joi = require("joi")
const fs = require('fs')
const path = require("path")
const pathServiceList = path.resolve("./src/assets/serviceList.json")
const serviceList = JSON.parse(fs.readFileSync(pathServiceList, 'utf8'))
exports.handler = async (event, context) => {
  try {
    const params = event.body
    const parsed = JSON.parse(params)
    if (parsed.purchaseInfo.serviceType === '1service') {
      const returnInfo = await process1Service(parsed)
      return {
        statusCode: 200,
        body: JSON.stringify(returnInfo.data)
      }
    }
    if (parsed.purchaseInfo.serviceType === '1month') {
      const returnInfo = await process1month(parsed)
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
    return {
      statusCode: 500,
      body: ''
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
 
}
async function process1month(parsed) {

  const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
  await numberArraySchema.validateAsync(parsed.numberArray)
  const numberArray = parsed.numberArray.toString()

  const storeAddress = 'https://btcpay.anonshop.app/api/v1/stores/' + BTCpayStore + '/invoices'
  const response = await axios.post(
          storeAddress,
          {
              'amount': '20',
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
                  serviceType: '1month',
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
async function process1Service(parsed) {

  const numberArraySchema = Joi.array().length(8).items(Joi.number().max(2050).min(0))
  await numberArraySchema.validateAsync(parsed.numberArray)
  const numberArray = parsed.numberArray.toString()

  const serviceSchema = Joi.string().required().min(4).max(40)
  await serviceSchema.validateAsync(parsed.purchaseInfo.service)

  let serviceCorrect = false
  for (let element of Object.keys(serviceList)) {
    if (element === parsed.purchaseInfo.service) {
      serviceCorrect = true
      break
    }
  }
  if (!serviceCorrect) {
    throw new Error('Service is not correct')
  }
  const storeAddress = 'https://btcpay.anonshop.app/api/v1/stores/' + BTCpayStore + '/invoices'
  const response = await axios.post(
          storeAddress,
          {
              'amount': serviceList[parsed.purchaseInfo.service].price,
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
                  service: parsed.purchaseInfo.service,
                  price: serviceList[parsed.purchaseInfo.service].price
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