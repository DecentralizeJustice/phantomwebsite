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
<section class="pt-6 pb-20 bg-gray-800 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="mb-6">
      <div class="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto"><a href="#"></a></div>
          </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto hidden lg:block">
              <ul class="flex items-center justify-center">
                <li class="mr-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Features</a></li>
                <li class="mr-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Solutions</a></li>
                <li class="mr-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Resources</a></li>
                <li><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto hidden lg:block">
              <div class="flex flex-wrap -m-2">
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Coming Soon</a></div>
                <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Learn More</a></div>
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
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Features</a></li>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Solutions</a></li>
                <li class="mb-9"><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Resources</a></li>
                <li><a class="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Pricing</a></li>
              </ul>
            </div>
            <div class="flex flex-col justify-end w-full pb-8">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 border border-gray-700 rounded-full" href="#">Log In</a></div>
                <div class="w-full p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Get Started</a></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      <div class="w-full md:w-auto p-4"><img class="mx-auto" src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685927855/landingpage/image-3.png" alt=""></div>
      <div class="w-full md:flex-1 p-4">
        <div class="relative flex flex-col justify-center items-center p-8 h-full text-center bg-gray-900 overflow-hidden rounded-3xl">
          <div class="absolute bottom-0 left-1/2 min-w-max transform -translate-x-1/2">
            <div class="absolute bg-gradient-radial-dark w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685922792/landingpage/pattern-grid-dark-light.svg" alt="">
          </div>
          <div class="relative max-w-lg"><span class="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">Phantom Phone</span>
            <h1 class="font-heading mb-6 text-5xl text-white font-black tracking-tight"><span>Protect Your </span><span class="text-blue-500">Real</span><span> Number.</span></h1>
            <p class="mb-8 text-xl text-gray-500 font-bold">Rent A Phone and Protect your Real Number from spam and hacks!</p>
            <div class="flex flex-wrap justify-center -m-2">
              <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Try Demo</a></div>
              <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-gray-400 font-bold bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Watch Video</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-16 bg-gray-800 overflow-hidden"><div class="container mx-auto px-4">
  <div class="relative">
    <div class="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
      <div class="absolute bg-gradient-radial-dark-light w-full h-full"></div><img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1685927797/landingpage/pattern-dark-light.png" alt=""></div>
    <div class="relative">
      <div class="mb-12 max-w-2xl mx-auto text-center">
        <h2 class="font-heading text-4xl md:text-5xl text-gray-100 font-black tracking-tight">Choose a Rental plan that suits you.</h2>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">BASIC Long Term</span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight">$15/mo</h2>
              <p class="mb-8 text-sm text-gray-700 font-bold">Billed Annually</p>
              <ul><li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">1,000 Text a Month</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Web Access</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Basic Support</p>
                </li>


              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 rounded-full" href="#">Coming Soon</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-blue-500 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-white font-bold uppercase tracking-widest">One Month </span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight"><span>$20</span><span class="text-xl text-blue-400 font-bold">/mo</span></h2>
              <p class="mb-8 text-sm text-blue-200 font-bold">For One Month</p>
              <ul><li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">1,000 Text a Month</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold" contenteditable="false">Web Access</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Basic Support</p>
                </li>


              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-blue-500 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-full" href="#">Coming Soon</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
            <div class="flex-initial mb-6"><span class="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">ADVANCED Long Term</span>
              <h2 class="font-heading text-4xl text-white font-black tracking-tight">$25/mo</h2>
              <p class="mb-8 text-sm text-gray-700 font-bold">Billed Annually</p>
              <ul><li class="flex items-center mb-4">
                <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Unlimted Text</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">Web Access</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="text-gray-100 font-bold">VIP Support</p>
                </li>
                <li class="flex items-center mb-4">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100">Recieve Your Sim In Mail</p>
                </li>
                <li class="flex items-center">
                  <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold text-gray-100">Early Access to New Features</p>
                </li>
              </ul></div>
            <div class="flex-initial">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 rounded-full" href="#">Coming Soon</a></div>
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
          <h2 class="font-heading mb-6 text-4xl md:text-5xl text-gray-100 font-black tracking-tight" contenteditable="false">A Real Phone that works with Every online service</h2>
          <p class="mb-5 text-gray-500 font-bold">I have built a open &amp; private system that gives you the ability to use platforms that requires a phone number privately. My phones are real phones and work on every platform!</p>
          <div class="flex flex-wrap -m-2">
            <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Coming Soon</a></div>
          </div>
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
                    <p class="text-gray-500 font-bold">If a service such as twitter or uber eats ask for your phone number, you give your rental number instead.</p>
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
                    <p class="text-gray-500 font-bold">Your phone rental protects you from spam and hacks. This means that you can thousands of </p>
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
