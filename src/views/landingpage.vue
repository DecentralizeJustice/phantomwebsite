<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
const customChatDiv = ref(null);

function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
async function checkForMessages() {
  const results = await axios.get('/.netlify/functions/getDemoTexts')
  messageArray.value = results.data
  await waitforme(750)
  const div = customChatDiv.value
  div.scrollTo({top: 99999999999999999999999999999, behavior: "smooth"})
}
onMounted(() => {
  checkForMessages()
})
const targetId = ref('123')

const scrollToElement = () =>  {
  const el = document.getElementById(targetId.value);
  if (el) {
    el.scrollIntoView();
  }
}
function getAvatar(censoredNumber){
  const digit = Number(censoredNumber[censoredNumber.length-5])
  const avatars = [
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024261/landingpage/avatars/man.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024277/landingpage/avatars/man_1.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024695/landingpage/avatars/woman_1.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024622/landingpage/avatars/woman.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024666/landingpage/avatars/man_2.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024678/landingpage/avatars/man_3.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024688/landingpage/avatars/man_4.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024702/landingpage/avatars/boy.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024713/landingpage/avatars/man_5.svg',
  'https://res.cloudinary.com/dylevfpbl/image/upload/v1686024733/landingpage/avatars/man_6.svg'
  ]
  return avatars[digit]
}
// checkForMessages()
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
const messageArray = ref([])

</script>

<template>
<section class="pb-15 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center -m-4">
      <div class="w-full md:w-auto p-4"><img class="mx-auto" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685927855/landingpage/image-3.png" alt=""></div>
      <div class="w-full md:flex-1 p-4">
        <div class="relative flex flex-col justify-center items-center p-8 h-full text-center bg-gray-900 overflow-hidden rounded-3xl">
          <div class="absolute bottom-0 left-1/2 min-w-max transform -translate-x-1/2">
            <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685922792/landingpage/pattern-grid-dark-light.svg" alt="">
          </div>
          <div class="relative max-w-lg"><span class="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">Phantom Phone</span>
            <h1 class="font-heading mb-6 text-5xl text-white font-black tracking-tight"><span>Protect Your </span><span class="text-blue-500">Real</span><span> Number.</span></h1>
            <p class="mb-8 text-xl text-gray-500 font-bold">Rent A Phone and use it for Phone Verifications on any service!</p>
            <div class="flex flex-wrap justify-center -m-2">
              <div class="w-full md:w-auto p-2"><button class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600  rounded-full" @click='scrollToElement'>Try Demo</button></div>
              <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-gray-400 font-bold bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 rounded-full" 
                target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=xYZblYyxITQ">Watch Video</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-16 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap lg:items-center -m-8">
      <div class="w-full md:w-1/2 p-8">
        <div class="md:max-w-lg"><span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Free Phone</span>
          <h2 class="font-heading mb-6 text-4xl md:text-5xl text-gray-100 font-black tracking-tight">Try Out Our Public Phone </h2>
          <p class="mb-5 text-gray-500 font-bold">Use our phone here to test our text verification service. This is a public and shared device though
            , so don't use it for any private communications 😉
          </p>
<!--           <div class="flex flex-wrap -m-2">
            <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full">Learn more</a></div>
          </div> -->
        </div>
      </div>
      <div class="w-full md:w-1/2 p-8" id="123">
        <div class="relative py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl ">
          <div class="flex flex-wrap  items-center justify-center">
            <div class="w-full md:w-auto">
              <h2 class="font-heading mb-9 text-3xl md:text-3xl text-gray-100 font-black tracking-tight text-center">Phone Number:<wbr> (240) 610-1463</h2>
            </div>
          </div>
          <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
            <div class="absolute bg-gradient-radial-dark w-full h-full"></div><!-- <img src="zanrly-assets/images/pattern-dark.png" alt=""> -->
          </div>
          <div class="grid grid-cols-1 max-h-96 overflow-y-auto" ref="customChatDiv">
            <div class="py-2 rounded-md flex flex-wrap items-center justify-left" v-for="n in messageArray">            
              <div class="chat chat-start"> 
              <div class="chat-image avatar"> <div class="w-10 rounded-full"> 
                <img :src=getAvatar(n.from) /> 
                </div> 
              </div> 
              <div class="chat-header text-white"> {{n.from}}
              </div> 
              <div class="chat-bubble break-words">{{n.text}}</div> 
              <div class="chat-footer opacity-50 text-white">
            Sent at {{localTime(n.sentStamp)}}
          </div>
            </div></div>
          </div>
<!--           <div class="flex items-center justify-center max-h-80 overflow-y-auto" ref="customChatDiv">
            <div class="chat chat-start py-3" > 
              <div class="chat-image avatar"> <div class="w-10 rounded-full"> 
                <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685932292/landingpage/man_3.png" /> 
                </div> 
              </div> 
              <div class="chat-header">  {{n.from}}
              </div> 
              <div class="chat-bubble">{{n.text}}</div> 
              <div class="chat-footer opacity-50">
            Sent at {{localTime(n.sentStamp)}}
          </div>
            </div>
          </div> -->
          <div class="flex flex-wrap -m-2 mt-7 items-center justify-center">
            <div class="w-full md:w-auto p-2">
              <button @click="checkForMessages" class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full">Check For New Messages</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
<section class="py-12 bg-gray-800 overflow-hidden"><div class="container mx-auto px-4">
  <div class="relative">
    <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
      <div class="absolute bg-gradient-radial-dark-light w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685927797/landingpage/pattern-dark-light.png" alt=""></div>
    <div class="relative">
      <div class="mb-12 max-w-2xl mx-auto text-center">
        <h2 class="font-heading text-4xl md:text-5xl text-gray-100 font-black tracking-tight">Choose a Rental that works for You!</h2>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">1 day and 1 Service</span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight">~$1.50/service</h2>
              <p class="mb-8 text-sm text-gray-700 font-bold">Verify One Service with 1 Day Access</p>
              <ul>
                <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Only Works for The  1 Service You Chose</p>
                </li>
                <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">You Have 1 day to verify 1 service</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Works for Google Voice, Twitter, Telegram etc...</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">All Day Access Gives you Multiple Tries to Verify</p>
                </li>
                <li class="flex items-center">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100">Meant for One Time Verification Needs</p>
                </li>


              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><router-link class="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-400 rounded-full" to="/">Sold Out</router-link></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-blue-500 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-white font-bold uppercase tracking-widest">1 Service Long Term Rental</span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight"><span>~$4</span><span class="text-xl text-blue-400 font-bold">/month</span></h2>
              <p class="mb-8 text-sm text-blue-200 font-bold">Billed 6 months A Time</p>
              <ul>
<!--                 <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">80% Discount for 3 Month Commitment</p>
                </li> -->
                <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Unlimited Text</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Verify 1 Service</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Only Way To Ensure Account Security</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Great for Verifying Multiple Services for Short Term Access</p>
                </li>



              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><router-link class="block w-full px-8 py-3.5 text-lg text-center text-blue-500 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-full" to="/">Sold Out</router-link></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">1 Month Rental</span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight">$20/mo</h2>
              <p class="mb-8 text-sm text-gray-700 font-bold">Billed 1 Month At A Time</p>
              <ul>
<!--                 <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">87% Discount for 1 Year Commitment</p>
                </li> -->
                <li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">200 Texts a Month</p>
                </li>
<!--                 <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">6 Months for 12 a month and 1 year for 120 USD</p>
                </li> -->
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Can be extended for Multiple Months</p>
                </li>

                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100">Extra Text Available for Purchase</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100">Great for Long Term Account Access</p>
                </li>

              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><router-link class="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-400 rounded-full" to="/">
                 Sold Out</router-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
<section class="py-16 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap lg:items-center -m-8">
      <div class="w-full md:w-1/2 p-8">
        <div class="md:max-w-md"><span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">How it works</span>
          <h2 class="font-heading mb-6 text-4xl md:text-5xl text-gray-100 font-black tracking-tight" contenteditable="false">A Real Phone that works with Most Online Services</h2>
          <p class="mb-5 text-gray-500 font-bold">I have built a open &amp; private system that gives you the ability to use platforms that requires a phone number privately. My phones are real phones and work on most platforms!</p>
<!--           <div class="flex flex-wrap -m-2">
            <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full">Coming Soon</a></div>
          </div> -->
        </div>
      </div>
      <div class="w-full md:w-1/2 p-8">
        <div class="relative py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl">
          <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
            <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
          </div>
          <div class="relative max-w-md mx-auto">
            <div class="flex flex-wrap -m-3">
              <div class="w-full p-3">
                <div class="flex flex-wrap -m-4">
                  <div class="flex flex-col items-center w-auto p-4">
                    <div class="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-800 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div class="w-px h-24 bg-gray-700"></div>
                  </div>
                  <div class="flex-1 p-4">
                    <h3 class="font-heading mb-3 text-2xl text-gray-100 font-bold">Purchase Rental</h3>
                    <p class="text-gray-500 font-bold">Purchase a rental for use. We offer different time commitments and price points. </p>
                  </div>
                </div>
              </div>
              <div class="w-full p-3">
                <div class="flex flex-wrap -m-4">
                  <div class="flex flex-col items-center w-auto p-4">
                    <div class="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-800 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div class="w-px h-24 bg-gray-700"></div>
                  </div>
                  <div class="flex-1 p-4">
                    <h3 class="font-heading mb-3 text-2xl text-gray-100 font-bold">Give Your Rental Number</h3>
                    <p class="text-gray-500 font-bold">If a service such as twitter, telegram, or signal ask for your phone number, you give your rental number instead.</p>
                  </div>
                </div>
              </div>
              <div class="w-full p-3">
                <div class="flex flex-wrap -m-4">
                  <div class="flex flex-col items-center w-auto p-4">
                    <div class="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-black bg-gray-800 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                      </svg>
                    </div>
                    <div class="md:hidden w-px h-24 bg-gray-700"></div>
                  </div>
                  <div class="flex-1 p-4">
                    <h3 class="font-heading mb-3 text-2xl text-gray-100 font-bold">Stay Private and Safe</h3>
                    <p class="text-gray-500 font-bold">Your phone rental protects you from spam and hacks while preserving your privacy. </p>
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
