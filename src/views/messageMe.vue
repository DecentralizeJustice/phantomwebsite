<script setup>
import axios from 'axios';
import { ref } from 'vue'
const text = ref('')
const messageSent = ref(false)
async function sendMessage() {
  if (text.value.length < 1) {
    return
  }
/*   buttonDisabled.value = true
  await sleep(3000)
  buttonDisabled.value = false */
  const results = await axios.post('/.netlify/functions/sendMeMessage', { message: text.value })
  console.log(results)
  text.value = ''
  messageSent.value = true
}
</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl">
      <div class="max-w-7xl mx-auto"><!-- <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt=""> -->
        <div class="relative flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col justify-between h-full">
              <div class="mb-10 md:max-w-md">
<!--                 <span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Message Me</span> -->
                <h2 class="font-heading text-blue-500 mb-6 text-4xl md:text-5xl lg:text-6xl  font-black tracking-tight">Message Me</h2>
                <p class="text-gray-200 font-bold text-xl">
                  Shoot me a message about anything anonymously. I work really hard on my project and I welcome all questions you might have!
                  I will respond on at the bottom of this page.
                </p>
              </div>
              <div class="flex flex-wrap -m-5">
                <div class="w-full md:w-auto p-4"><img class="mx-auto" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1686593007/landingpage/pexels-sora-shimazaki-5926370_1.jpg" alt=""></div>

              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="p-10 bg-gray-800 rounded-3xl">
              <div class="flex flex-wrap -m-3 mb-3">
              </div>
              <div class="flex flex-wrap -m-3.5" v-if="!messageSent">
                <div class="w-full p-3.5">
                  <label class="block mb-2 text-sm text-gray-500 font-bold">Message</label>
                  <textarea v-model="text" class="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" id="contactDarkReversePatternInput4-5" type="text" rows="8" placeholder="Enter your message"></textarea>
                </div>
                <div class="w-full p-3.5">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-full p-3">
                      <div class="flex flex-wrap md:justify-end -m-2">
                        <div class="w-full p-2"><button class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full" @click="sendMessage">Send Message</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-3.5" v-if="messageSent">
                <div class="w-full p-3.5">
                  <p class="text-gray-200 font-bold text-xl">
                 Your message has been sent! I always try to respond to messages within 24 hours so check back here soon! Thanks again.
                </p></div>
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
