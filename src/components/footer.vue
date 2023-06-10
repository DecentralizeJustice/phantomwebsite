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
 <section class="py-10 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="relative py-16 px-8 bg-gray-900 overflow-hidden rounded-3xl">
      <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
        <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="zanrly-assets/images/pattern-dark.png" alt="">
      </div>
      <div class="relative flex flex-col justify-centers"><a class="inline-block max-w-max mx-auto mb-10" href="#"></a>
        <ul class="-m-6 mb-7 text-center">
          <li class="inline-flex p-6"><a class="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">Products</a></li>
          <li class="inline-flex p-6"><a class="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">About Us</a></li>
          <li class="inline-flex p-6"><a class="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">Careers</a></li>
          <li class="inline-flex p-6"><a class="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">Portfolio</a></li>
          <li class="inline-flex p-6"><a class="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">Contact Us</a></li>
        </ul>
        <div class="flex flex-wrap justify-center -m-1.5 mb-10">
          <div class="w-auto p-1.5"><a class="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/footers/insta-dark.svg" alt=""></a></div>
          <div class="w-auto p-1.5"><a class="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/footers/twitter-dark.svg" alt=""></a></div>
          <div class="w-auto p-1.5"><a class="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/fb-dark.svg" alt=""></a></div>
        </div>
        <p class="text-gray-500 text-center font-bold"><span>Ⓒ Copyright. All rights reserved by </span><a class="text-blue-500 hover:text-blue-600" href="#">Phantom Phone</a></p>
      </div>
    </div>
  </div>
</section>
      
</template>

<style scoped>
</style>
