<script setup>
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
</script>
<template>
  <section class="pt-6 pb-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">

<!--         <div class="mb-6">
        <div class="flex items-center justify-between px-6 py-3.5 bg-gray-800 rounded-full">
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto"><a href="#"><img src="zanrly-assets/logos/zanrly-logo-white.svg" alt=""></a></div>
            </div>
          </div> -->

    <div class="">
      <div class="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
                <div class="w-auto"><a href="/">
                  <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1687405771/landingpage/Phantom_Phone_4.svg" alt=""></a></div>
              </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto hidden lg:block">
              <ul class="flex items-center justify-center">
                <li class="mr-9"><a class="inline-block text-lg font-bold text-gray-200 hover:text-gray-300 " href="/messageMe">Message Me</a></li>
                <li class="mr-9"><a class="inline-block text-lg font-bold text-gray-200 hover:text-gray-300" href="/faq">FAQ</a></li>
                <li class="mr-9"><a class="inline-block text-lg font-bold text-gray-200 hover:text-gray-300" href="https://blog.anonindustries.com/">Blog</a></li>
<!--                 <li class="mr-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Solutions</a></li>
                <li class="mr-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Resources</a></li>
                <li><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Pricing</a></li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto hidden lg:block">
              <div class="flex flex-wrap -m-2">
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" href="/login">Login</a></div>
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="/">Home</a></div>
              </div>
            </div>
            <div class="w-auto lg:hidden"><a class="inline-block" href="#">
              <svg class="navbar-burger text-blue-500" width="45" height="45" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></a></div>
          </div>
        </div>
      </div>
      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav class="relative z-10 px-9 pt-8 bg-gray-900 h-full overflow-y-auto">
          <div class="flex flex-wrap justify-between h-full">
            <div class="w-full">
              <div class="flex items-center justify-between -m-2">
                <div class="w-auto p-2"><a class="inline-block" href="#"></a></div>
                <div class="w-auto p-2"><a class="inline-block navbar-burger" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></a></div>
              </div>
            </div>
            <div class="flex flex-col justify-center py-8 w-full">
              <ul>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="/messageMe">Message Me</a></li>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="/faq">FAQ</a></li>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="https://blog.anonindustries.com/">Blog</a></li>
<!--                 <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Solutions</a></li>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Resources</a></li>
                <li><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Pricing</a></li> -->
              </ul>
            </div>
            <div class="flex flex-col justify-end w-full pb-8">
              <div class="flex flex-wrap -m-2">
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" href="/login">Login</a></div>
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="/">Home</a></div></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</section>
      
</template>

<style scoped>
</style>
