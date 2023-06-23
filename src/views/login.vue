<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import words from '@/assets/bip39Wordlist.txt?raw'
const passphraseWords = ref(["", "", "", "", "", "", "", ""])
const wrongWord = ref(999)
const phoneNumber = ref('')
const orderData = ref({})
const rentalPhoneMessages = ref([])
const message = ref('')
const customChatDiv = ref(null)
const customChatDiv2 = ref(null)
const orderDoesNotExist = ref(false)
function getPassphraseInputLabels(i) {
  var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
async function signIn() {
  try {
      const numberArray = []
    for (let index = 0; index < 8; index++) {
      const element = passphraseWords.value[index]
      const number = wordToNumber(element)
      if (number === false) {
        wrongWord.value = index
        console.log((index + 1) + ' is not a correct word')
        return
      }
      numberArray.push(number)
    }
    const results = await axios.post('/.netlify/functions/getOrderInfo', { passphrase: numberArray })
    if (results.data === null) {
      orderDoesNotExist.value = true
      throw new Error('Order does not exist')
    }
    orderData.value = results.data
    await getCorrectRentalMessages()
    await waitforme(500)
    const div = customChatDiv.value
    div.scrollTo({ top: 99999999999999999999999999999, behavior: "smooth" })
    const div2 = customChatDiv2.value
    div2.scrollTo({ top: 99999999999999999999999999999, behavior: "smooth" })
  } catch (error) {
    console.log(error)
  }

}
function wordToNumber(word) {
  const wordArray = words.split(/\r?\n/)
  const tempWord = word.toLowerCase().replace(/\s+/g, '')
  for (let index = 0; index < wordArray.length; index++) {
    const element = wordArray[index]
    if (element === tempWord) {
      return index
    }
  }
 return false
}
async function getCorrectRentalMessages() {
  const results = await axios.post('/.netlify/functions/getCorrectRentalMessages',
    { passphrase: orderData.value.passphrase.split(",") })
  rentalPhoneMessages.value = results.data.messages
  phoneNumber.value = results.data.phoneNumber
}
async function refresh() {
  const results = await axios.post('/.netlify/functions/getOrderInfo', 
  { passphrase: orderData.value.passphrase.split(",") })
  orderData.value = results.data
  await getCorrectRentalMessages()
  await waitforme(500)
  const div = customChatDiv.value
  div.scrollTo({ top: 99999999999999999999999999999, behavior: "smooth" })
  const div2 = customChatDiv2.value
  div2.scrollTo({ top: 99999999999999999999999999999, behavior: "smooth" })
}
async function sendMessage() {
  await axios.post('/.netlify/functions/sendCustomerChat',
   { 
    passphrase: orderData.value.passphrase.split(","), 
    message: message.value, 
    sender: 'customer' 
  })
  message.value = ''
  await refresh()
}
function localTime(epoch) {
  var timestamp = epoch;
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  var day =  date.getDate()
  var month = date.getMonth() + 1
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm + ' ' + day + '/' + month
  return strTime;
}
function getChatImage(sender) {
  if (sender !== 'dgoon') {
    return 'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024666/landingpage/avatars/man_2.svg'
  }
  return 'https://res.cloudinary.com/dylevfpbl/image/upload/v1687402881/landingpage/avatars/african-man.svg'
}
const serviceInfo = computed(() => {
  // console.log(orderData.value)
  
  return {
    chosenPhone: orderData.value.chosenPhone,
    serviceInfo: orderData.value.allOrderInformation.orderInfo.metadata
  }
})
const allEntered = computed(() => {
  return !passphraseWords.value.includes('')
})
onMounted(() => {
  const routeInfo = router.currentRoute.value
  const routeName = routeInfo.name
  const routeHash = routeInfo.hash
  if (routeName === 'login') {
    const rawFrag = routeHash.substring(1)
    const fragWordArray = rawFrag.split(',')
    if (fragWordArray.length === 8) {
      passphraseWords.value = fragWordArray
    }
  }
})
watch(
  () => passphraseWords,
  (newValue, oldValue) => {
    wrongWord.value = 999
  },
  { deep: true }
)
</script>

<template>
<section class="bg-gray-800 overflow-hidden" v-if="Object.keys(orderData).length === 0">
  <div class="container mx-auto px-4">
    <div class="relative md:pb-8 md:max-w-3xl mx-auto bg-gray-900 overflow-hidden rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative"><img class="mb-8 mx-auto" src="" alt="">
        <div class="md:max-w-md mx-auto">
          <div v-if="!orderDoesNotExist" class="mb-10 text-center">
            <h2 class="font-heading mb-4 text-4xl md:text-5xl text-white font-black tracking-tight">Welcome</h2>>
            <p class="text-gray-400 font-bold">Please enter your 8 word passphrase below:</p>
          </div>
          <div v-if="orderDoesNotExist" class="mb-10 text-center" >
              <h2  class="font-heading mb-4 text-4xl md:text-4xl text-red-500 font-black">Your Order Does Not Exist. Check your
              passphrase or message me <a class='text-blue-500' href="/messageMe">here!</a>. Transactions take 3 blockes to confirm.</h2>
            </div>
            <div class="flex flex-wrap -m-3 mb-5">
              <div class="w-full p-3 mx-6 md:mx-0 flex flex-col items-left" v-for="index in 8" :key="index">
                <div v-if="index === wrongWord + 1" class="text-red-500 text-center text-lg font-bold">{{index}} is Not a Valid Word!</div>
                <label class="block mb-2 text-sm text-gray-400 font-bold" for="signInDarkReversePatternInput3-1">{{ index }}.</label>
                <input class="appearance-none px-6 py-3.5 md:w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full" v-model="passphraseWords[index-1]" :placeholder='getPassphraseInputLabels(index) + " Word"'>
              </div>
              <div class="w-full p-3 mt-2">
                <div class="flex flex-wrap md:justify-end -m-2">
                  <div class="w-full md:p-2 p-5">
                    <button v-if='!allEntered' class="w-full block px-8 py-3.5 text-lg text-center text-white font-bold bg-slate-700 rounded-full" @click="">Sign In</button>
                    <button v-if="allEntered" class="w-full block px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click="signIn()">Sign In</button>
                  </div>
                </div>
              </div>
              <div class="w-full p-3">
                <p class="text-gray-600 text-center font-bold"><span>Don’t have an account? </span><br/><a class="text-blue-500 hover:text-blue-600 font-bold" href="/">Purchase A Phone PLan</a></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-gray-800 overflow-hidden" v-if="Object.keys(orderData).length !== 0">
  <div class="container mx-auto px-4">
    <div class="relative p-10 bg-gray-900 overflow-hidden rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative z-10">
        <div class="flex flex-wrap items-center -m-8">
          <div class="w-full md:w-1/2 p-8 ">
            <div class="md:max-w-md mx-auto">
              <div class="max-w-sm rounded shadow-lg">
              <div class="px-6 py-4 bg-gray-800" >
                <div class="rounded-md font-bold text-2xl mb-2 text-center mb-5 bg-blue-500 text-white py-4">Customer Support Chat</div>
                <div style="height: 40vh;" class="overflow-auto" ref="customChatDiv" >
                <div v-for="(message, index) in orderData.customerChat" :key="message.timestamp">
                  <div class="chat"
                  :class="{ 'chat-start':  message.sender === 'dgoon', 
                  'chat-end':  message.sender !== 'dgoon' }">
                    <div class="chat-image avatar">
                      <div class="w-10 rounded-full">
                        <img :src="getChatImage(message.sender)" />
                      </div>
                    </div>
                    <div class="chat-header text-white">
                      {{ message.sender }}
                    
                    </div>
                    <div class="chat-bubble break-words">{{ message.message }} </div>
                    <div class="chat-footer text-white">
                      Sent at {{localTime(message.timestamp)}}
                    </div>
                  </div>
              </div>
                     
            </div>
            <textarea class="appearance-none px-2 md:px-6 my-5 py-5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" type="text" rows="4" placeholder="Enter your message"
            v-model="message"></textarea>
            <div class="flex flex-wrap my-1">
              <div class="w-full lg:w-1/2 p-2"><button @click='refresh' class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full">Check For New Messages</button></div>
                <div class="w-full lg:w-1/2 p-2"><button @click='sendMessage' class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-green-500 hover:bg-green-600  rounded-full">Send Message</button></div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8 " v-if="serviceInfo.serviceInfo.purchase.serviceType === '1service'">
              <div class="md:max-w-md mx-auto">
                <div class="max-w-sm rounded shadow-lg">
                <div class="px-6 py-4 bg-gray-800" >
                  <div class="rounded-md font-bold mb-2 text-center mb-5 bg-blue-500 text-white py-4">
                    <div class="text-xl px-5">{{ serviceInfo.serviceInfo.purchase.service }} 1 day & 1 Service Rental</div>
                    <div class="text-2xl mt-3">Number: {{ phoneNumber}}</div>
                  </div>
                  <div style="height: 40vh;" class="overflow-auto" ref="customChatDiv2">
                  <div class="text-white text-center text-xl" v-if="rentalPhoneMessages.length === 0">
                    No Messages from {{ serviceInfo.serviceInfo.purchase.service }}
                  </div>
                  <div v-for="(message) in rentalPhoneMessages" v-if="rentalPhoneMessages.length !== 0">
                    <div class="chat chat-start">
                      <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                          <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1687389222/landingpage/avatars/bot.svg" />
                        </div>
                      </div>
                      <div class="chat-header text-white">
                        {{ message.from }}
                    
                      </div>
                      <div class="chat-bubble break-words">{{ message.text }} </div>
                      <div class="chat-footer text-white">
                        Sent at {{ localTime(message.sentStamp) }}
                      </div>
                    </div>
                </div>
                     
              </div>
              <div class="flex flex-wrap my-1">
                <div class="w-full lg:w-1/2 p-2"><button @click='refresh' class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full">Check For New Messages</button></div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<style scoped>
.bg-gradient-radial-dark-light {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(31,41,55,0) 0,#1f2937 100%)
}
.bg-gradient-radial-dark {
  background-image:radial-gradient(50% 50% at 50% 50%,rgba(17,24,39,0) 0,#111827 100%)
}
</style>
