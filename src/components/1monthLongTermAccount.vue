<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue'
const phoneNumber = ref('')
const rentalPhoneMessages = ref([])
const message = ref('')
const customChatDiv = ref(null)
const customChatDiv2 = ref(null)
const props = defineProps({
  orderData: Object
})
const orderData = ref({})
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
async function initialSetup() {
  try {
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
async function getCorrectRentalMessages() {
  let results = {}
  results = await axios.post('/.netlify/functions/getCorrectRentalSoloRentalMessages',
    { passphrase: orderData.value.passphrase.split(",") })
  rentalPhoneMessages.value = results.data.messages
  phoneNumber.value = results.data.phoneNumber
  return
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
  return {
    chosenPhone: orderData.value.chosenPhone,
    serviceInfo: orderData.value.allOrderInformation.orderInfo.metadata
  }
})
onMounted(() => {
  orderData.value = props.orderData
  initialSetup()
})
</script>

<template>
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
          <div class="w-full md:w-1/2 p-8 ">
              <div class="md:max-w-md mx-auto">
                <div class="max-w-sm rounded shadow-lg">
                <div class="px-6 py-4 bg-gray-800" >
                  <div class="rounded-md font-bold mb-2 text-center mb-5 bg-blue-500 text-white py-4">
                    <div class="text-xl px-5">{{ serviceInfo.serviceInfo.purchase.service }} 1 Month Whole Service Rental</div>
                    <div class="text-2xl mt-3">Number: {{  phoneNumber }}</div>
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
