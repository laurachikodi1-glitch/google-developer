vue
<script setup lang="ts">
import googleDeveloperslogo from '../assets/lockup-new.svg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  
   <!-- <nav class="google-navbar w-full bg-white border-b border-gray-200">  -->
      <!-- <div class="mx-auto flex h-16 max-w-[1440px] items-center px-6">  -->
       <nav class="bg-white fixed top-0 left-0 z-50 bg-whitepx-8 py-2 flex w-full items-center"> 
      <!-- Google for Developers Logo -->
       
       
          <!-- <div class="flex items-center gap-10"> -->
             <div class="flex items-center">
             <img
            :src="googleDeveloperslogo"
            alt="Google for Developers"
            class=" text-normal h-auto w-48 px-8  mr-8"/>
         

  <!-- Navigation Links -->
   

  <a href="#"
    class=" mr-8 whitespace-nowrap text-sm font-medium uppercase text-gray-700 hover:text-blue-600">
    COMMUNITY / EVENTS
  </a>

/
  <a href="#"
          class=" mr-8 whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600" >
          LEARN
        </a>


        <!-- Blog -->
        <a href="#"
          class=" mr-8 whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600" >
          BLOG
        </a>

          <!-- YouTube -->
        <a href="#"
          class=" mr-8 whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600">
          YOUTUBE
        </a>
        </div>


      <!-- Right Navbar -->
       <div class="ml-auto flex items-center gap-6">

        <button
          class="flex h-9 w-[150px] items-center rounded-md bg-gray-100 px-3 text-gray-800 hover:bg-gray-100"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
            />
          </svg>


  <span class="text-[11px] font-medium mr-3">
    SEARCH
  </span>

  <span class="ml-auto flex h-6 w-6 items-center justify-center rounded bg-white text-xs">
    /
  </span>
        </button>


        <div class="flex items-center gap-2 rounded-md border bg-white-gray-200 px-5 py-2">

  <!-- Globe icon -->
  <i class="fa-solid fa-globe"></i>

  <!-- Language select -->
  <select
    class="cursor-pointer border-none bg-transparent text-sm outline-none"
  >
    <option value="en">ENGLISH</option>
    <option value="de">Deutsch</option>
    <option value="es">Espanol</option>
    <option value="in">Indonesia</option>
    <option value="it">Italiano</option>
    <option value="po">Poiski</option>
    <option value="fr">Francia</option>
  </select>

</div>



<!-- Purple C -->
<span class="flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full text-white text-xs font-bold mr-3">
  C
</span>
    </div>
     
  </nav>
  </template>






