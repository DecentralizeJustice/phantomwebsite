<script setup>
import axios from 'axios';
import { ref, toRaw } from 'vue'
import { getRandomInt, numberArrayToWordArray } from '@/assets/misc.js'
</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative pt-16 pb-24 md:pb-52 md:max-w-3xl mx-auto bg-gray-900 overflow-hidden rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative"><img class="mb-24 mx-auto" src="" alt="">
        <div class="md:max-w-md mx-auto">
          <div class="mb-10 text-center">
            <h2 class="font-heading mb-4 text-4xl md:text-5xl text-white font-black tracking-tight">Welcome Back</h2>
            <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condim entum.</p>
          </div>
          <form>
            <div class="flex flex-wrap -m-3">
              <div class="w-full p-3">
                <label class="block mb-2 text-sm text-gray-400 font-bold" for="signInDarkReversePatternInput3-1">Email Address</label>
                <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full" id="signInDarkReversePatternInput3-1" type="email" placeholder="Enter email address">
              </div>
              <div class="w-full p-3">
                <label class="block mb-2 text-sm text-gray-400 font-bold" for="signInDarkReversePatternInput3-2">Password</label>
                <div class="border border-gray-700 overflow-hidden rounded-full focus-within:ring-4 focus-within:ring-blue-200">
                  <div class="flex flex-wrap">
                    <div class="flex-1">
                      <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none" id="signInDarkReversePatternInput3-2" type="password" placeholder="*************">
                    </div>
                    <div class="w-auto"><a class="flex items-center pr-4 text-blue-500 hover:text-blue-600 h-full bg-gray-800 font-bold" href="#">Forgot password?</a></div>
                  </div>
                </div>
              </div>
              <div class="w-full p-3">
                <div class="flex flex-wrap md:justify-end -m-2">
                  <div class="w-full p-2"><a class="block px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Sign In</a></div>
                </div>
              </div>
              <div class="w-full p-3">
                <p class="text-gray-600 text-center font-bold"><span>Don’t have an account? </span><a class="text-blue-500 hover:text-blue-600 font-bold" href="#">Create free account</a></p>
              </div>
            </div>
          </form>
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
