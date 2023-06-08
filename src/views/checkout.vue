<script setup>

</script>

<template>
<section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-20 px-8 bg-gray-900 overflow-hidden rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685928443/landingpage/pattern-dark.png" alt="">
      </div>
      <div class="relative z-10 pb-32 md:pb-64 max-w-7xl mx-auto">
        <div class="md:max-w-md mx-auto text-center"><img class="mb-32 md:mb-64 mx-auto" src="" alt="">
          <h3 class="font-heading text-2xl text-blue-500 font-black tracking-tight">404</h3>
          <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Page not found</h2>
          <p class="mb-6 text-gray-500 font-bold">We’re sorry, the page you requested could not be found. Please go back to the homepage</p>
          <div class="flex flex-wrap justify-center -m-2">
            <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Go back to Homepage</a></div>
            <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full" href="#">Try Again</a></div>
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
