<script setup>
import axios from 'axios';
import { ref, toRaw } from 'vue'
import { getRandomInt, numberArrayToWordArray } from '@/assets/misc.js'
const step = ref(0)
const numberArray = ref([])
const wordArray = ref([])
const buttonDisabled = ref(false)
async function getPassphrase() {
  step.value +=1
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
    purchase: 'premium',
    numberArray: toRaw(numberArray.value)
  })
  window.location.href = results.data.checkoutLink
}
</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative p-10 bg-gray-900 overflow-hidden rounded-3xl">
<!--       <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div> -->
      <div class="relative z-10">
        <div class="flex flex-wrap items-center -m-8">
          <div class="w-full md:w-1/2 p-8"><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1686249628/landingpage/image_4.png" alt=""></div>
          
          <div class="w-full md:w-1/2 p-8 order-first md:order-last">
            <div class="md:max-w-md mx-auto text-center" v-if='step === 0'>
              <span class="inline-block mb-6 text-lg text-blue-500 font-bold uppercase tracking-widest">Purchase PREMIUM 3 Month Rental</span>
                <h2 class="font-heading text-6xl text-white font-black tracking-tight">$20/mo</h2>
                    <p class="mb-8 mt-2 text-lg text-gray-700 font-bold">60 USD For 3 Months</p>
                    <ul class="text-left"><li class="flex items-center mb-4">
                      <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">Unlimited Texts*</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">Web Gui Access</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">Premium Support</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100 text-xl">Access to Early Features First</p>
                      </li>
                    </ul>
                    <div class="flex flex-wrap justify-center -m-2 mt-5">
                  <div class="w-full md:w-auto p-2"><button class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click="getPassphrase()">Purchase</button></div>
                </div>
            </div>
            <div class="md:max-w-md mx-auto text-center" v-if='step === 1'>
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
