<script setup>
import axios from 'axios';
import { ref, toRaw, onMounted } from 'vue'
import { getRandomInt, numberArrayToWordArray } from '@/assets/misc.js'
const props = defineProps({
  purchaseInfo: Object
})
const numberArray = ref([])
const wordArray = ref([])
const buttonDisabled = ref(false)
async function getPassphrase() {
  const tempNumberArray = []
  for (let index = 0; index < 8; index++) {
    tempNumberArray.push(await getRandomInt(2048))
  }
  wordArray.value = numberArrayToWordArray(tempNumberArray)
  numberArray.value = tempNumberArray
}
const purchaseInfo = `This passphrase is how you will access your account,  
so protect it like a password. After you press continue, you will be taken to a payment portal. 
After your payment has 3 confirmations, you can use this passphrase to log in to your account.`
async function goToBTCPay() {
  buttonDisabled.value = true
  const results = await axios.post('/.netlify/functions/submitOrder',
  {
    purchaseInfo: props.purchaseInfo,
    numberArray: toRaw(numberArray.value)
  })
  window.location.href = results.data.checkoutLink
}
onMounted(() => {
  getPassphrase()
})
</script>

<template>
<div class="md:max-w-md mx-auto text-center">
  <span class="inline-block mb-6 text-3xl text-red-500 font-bold uppercase tracking-widest">Write Down Your Account Passphrase</span>
        <ul class="text-left">
        <li class="flex items-center mb-4" v-for="(item, index) in wordArray">
          <p class="text-2xl text-gray-100 font-bold">{{ index + 1 }}. {{ item }}</p>
          </li>
        </ul>
        <p class="text-xl text-gray-100 text-left mt-5">{{ purchaseInfo }}

        </p>
        <div class="flex flex-wrap justify-center -m-2 mt-5">
      <div class="w-full md:w-auto p-2"><button :disabled="buttonDisabled" class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click="goToBTCPay()">Continue</button></div>
    </div>
</div>
</template>

<style scoped>
</style>
