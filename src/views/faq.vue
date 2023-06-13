<script setup>
import { ref } from 'vue'
const faq = [
  {
    question: 'Where are your phones located?',
    answer: `Our phones are located in the United States.
    We can only offer US phone numbers at this time also.`
  },
  {
    question: 'What happens when your rental period ends?',
    answer: 'When your rental period ends, we remove the sim card from the phone and we then delete your chat history soon after that from our database. '
  },
  {
    question: `How do you renew a rental?`,
    answer: `In order to renew you simply hit the renew button 5 days before your rental period ends. 
    This button can be found in your account after you sign in.
    `
  }
]
const selectedQuestion = ref(-1)
function selectQuestion(chosen) {
  if (selectedQuestion.value === chosen) {
    selectedQuestion.value = -1
    return
  }
  selectedQuestion.value = chosen
}
</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden border border-gray-800 rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative mb-10 md:max-w-xl mx-auto text-center"><span class="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">Frequently asked questions</span>
        <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Got questions? We’re here to help!</h2>
<!--         <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p> -->
      </div>
      <div class="relative max-w-3xl mx-auto">
        <div class="flex flex-wrap -m-5" v-for="(question, index) in faq" :key="index">
          <div class="w-full p-3 my-3" v-if="index === selectedQuestion">
            <a class="block p-10 bg-gray-800 rounded-3xl text-left" @click="selectQuestion(index)">
            <div class="flex flex-wrap -m-2">
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-4 text-xl text-white font-black">{{ question.question}}</h3>
                <p class="text-gray-400 font-bold">{{ question.answer }}</p>
              </div>
              <div class="w-auto p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.07928 15.8198L12.3093 15.8198L17.9193 15.8198C18.8793 15.8198 19.3593 14.6598 18.6793 13.9798L13.4993 8.79983C12.6693 7.96983 11.3193 7.96983 10.4893 8.79983L8.51928 10.7698L5.30927 13.9798C4.63927 14.6598 5.11928 15.8198 6.07928 15.8198Z" fill="#374151"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
          <div class="w-full p-3 my-3" v-if="index !== selectedQuestion">
            <a class="block p-10 bg-gray-800 rounded-3xl text-left" @click="selectQuestion(index)" >
            <div class="flex flex-wrap -m-2">
              <div class="flex-1 p-2">
                <h3 class="font-heading text-xl text-white font-black">{{ question.question }}</h3>
              </div>
              <div class="w-auto p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9207 8.18018H11.6907H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302L18.6907 10.0202C19.3607 9.34018 18.8807 8.18018 17.9207 8.18018Z" fill="#374151"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        </div>
        <p class="text-gray-400 font-bold text-center mt-8"><span>Still have any questions? </span><a class="text-blue-500 hover:text-blue-600" href="/messageMe">Ask Me Here</a></p>
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
