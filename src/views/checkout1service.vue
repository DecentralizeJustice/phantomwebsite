<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { getRandomInt, numberArrayToWordArray } from '@/assets/misc.js'
import checkoutPassphrase from "@/components/checkoutPassphrase.vue"
import serviceList from '@/assets/serviceList.json'
const stockArray = ref([])
const step = ref(0)
const selected = ref('')
const numberArray = ref([])
const wordArray = ref([])
async function getPassphrase() {
  step.value +=1
  const tempNumberArray = []
  for (let index = 0; index < 8; index++) {
    tempNumberArray.push(await getRandomInt(2048))
  }
  wordArray.value = numberArrayToWordArray(tempNumberArray)
  numberArray.value = tempNumberArray
}
const serviceInfo = computed(() => {
  return { serviceType: '1service', service: selected.value}
})
async function getStock() {
  const results = await axios.get('/.netlify/functions/get1ServiceStock')
  stockArray.value = results.data 
}
const servicePriceandStock = computed(() => {
  let clone = JSON.parse(JSON.stringify(serviceList))
  for (const item in clone) {
    clone[item].stock = 0
  }
  for (const service in serviceList) {
    for (const phone of stockArray.value) {
      const usedServices = phone.sim1
      const usedServices1 = phone.sim2
      if (!usedServices.includes(service) && !usedServices.includes('all')) {
        clone[service].stock +=1
      }
      if (!usedServices1.includes(service) && !usedServices1.includes('all')) {
        clone[service].stock += 1
      }
    }
  }
  return clone
})
const serviceOptions = computed(() => {
  const availableservices = []
  const servicesArray = servicePriceandStock.value
  for (const service in servicesArray) {
    if(servicesArray[service].stock > 0)
    availableservices.push(service)
  }
  return availableservices
})
onMounted(() => {
  getStock()
})
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
          <div class="w-full md:w-1/2 p-8">
            <img v-if='step === 1' src="https://res.cloudinary.com/dylevfpbl/image/upload/v1686249628/landingpage/image_4.png" alt="">
                <div class="md:max-w-md mx-auto text-center" v-if='step === 0'>
                  <h3 class="font-heading text-5xl text-white font-black tracking-tight mb-5">Supply and Pricing</h3>
                      <ul style="height: 40vh;" class="overflow-auto bg-gray-800 rounded-xl">
                        <li class="flex items-center px-3 py-5" v-for="(value, name, index) in servicePriceandStock">
                          <p class="text-gray-100 font-bold text-xl">{{name}}: ${{ value.price.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 }) }} , stock: {{ value.stock }}</p>
                        </li>
  <!--                       <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100 text-xl">Access to Early Features First</p>
                      </li> -->
                      </ul>
              </div>
          </div>
          
          <div class="w-full md:w-1/2 p-8 order-first md:order-last">
            <div class="md:max-w-md mx-auto text-center" v-if='step === 0'>
              <span class="inline-block mb-6 text-lg text-blue-500 font-bold uppercase tracking-widest">Purchase 1 Service Phone Rental</span>
                <h2 class="font-heading  text-4xl  md:text-6xl text-white font-black tracking-tight">~$1.5/service</h2>
                    <p class="mb-8 mt-2 text-lg text-gray-700 font-bold">Verify One Service with 1 Day Access</p>
                    <ul class="text-left"><li class="flex items-center mb-4">
                      <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">You Have 1 day to verify 1 service</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">Works for Google Voice, Twitter, Telegram etc...</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold text-xl">All Day Access Gives you Multiple Tries to Verify</p>
                      </li>
                      <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100 text-xl">Meant for One Time Verification Needs</p>
                      </li>
<!--                       <li class="flex items-center mb-4">
                        <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100 text-xl">Access to Early Features First</p>
                      </li> -->
                    </ul>
                    <div class="mb-4">
                      <label class="inline-block mb-2 text-white font-bold text-2xl">Select Service</label>
                      
                      <div class="px-6 py-3.5 mb-4 bg-gray-900 border border-gray-900 rounded-3xl">
                        <select v-model="selected" class="w-full bg-transparent text-lg text-white placeholder-gray-200 font-bold outline-none" name="field-name">
                          <option disabled value="">Please select one</option>
                          <option class="text-gray-900" v-for="service in serviceOptions">{{service}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="text-white text-xl" v-if="selected !== ''">
                      Service Cost: ${{ servicePriceandStock[selected].price.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 }) }}</div>
                    <div class="flex flex-wrap justify-center -m-2 mt-5">
                  <div class="w-full md:w-auto p-2">
                    <button v-if="selected===''" disabled class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-slate-500  rounded-full" @click="getPassphrase()">Purchase</button>
                    <button v-if="selected !== ''"  class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click="getPassphrase()">Purchase</button>
                  </div>
                </div>
            </div>
            <checkoutPassphrase v-if='step === 1' :purchaseInfo=serviceInfo />
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
