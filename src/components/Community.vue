<script setup lang="ts">
import card1Img from '../assets/card 1.png'
import card2Img from '../assets/card 2.png'
import card3Img from '../assets/card 3.png'
import card4Img from '../assets/card 4.svg'
import GoogleImg from '../assets/Google.svg' 

const ioconnentImg = card1Img
const buildgeminiImg = card2Img
const cloudsummitImg = card3Img

</script>

<template> 

<!-- Community & Events Section -->
<section class="px-5 py-10">

  <!-- Section Heading -->
  <div>
    <h2 class="text-[40px] font-normal tracking-tight text-[#0b0b0b]">
      Community & Events
    </h2>

    <!-- Fancy line under heading -->
     <div class="mt-7 h-px w-full bg-gray-300"></div>
    
  </div>  
  


  <!-- Event Cards -->
  <div class="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

    <!-- Card 1 -->
    <div class="w-full">

      <!-- Category -->
      <h4 class="mb-5 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide text-[#111827]">
        <span class="h-[6px] w-[6px] bg-[#4285f4]"></span>
        GOOGLE I/O CONNECT
      </h4>

      <!-- Image -->
      <img
        :src="card1Img"
        alt="I/O Connect China"
        class="h-[238px] w-full rounded-[4px] object-cover"
      />

      <!-- Title -->
      <h3 class="mt-5 text-[18px] font-normal text-[#111827]">
        I/O Connect China
      </h3>

      <!-- Description -->
      <p class="mt-2 text-[17px] leading-[1.5] text-[#374151]">
        Connect with fellow professional developers and Google experts,
        get inspired by the latest tools and tech, accelerate your
        development, and create cutting-edge applications.
      </p>

      <!-- Date -->
      <p class="mt-7 text-[15px] text-[#374151]">
        <span>September 2026 / Shanghai, China</span>
      </p>

    </div>


    <!-- Card 2 -->
    <div class="w-full">

      <!-- Category -->
      <h4 class="mb-5 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide text-[#111827]">
        <span class="h-[6px] w-[6px] bg-[#4285f4]"></span>
        GOOGLE CLOUD
      </h4>

      <!-- Image -->
      <img
        :src="card2Img"
        alt="Build with Gemini"
        class="h-[238px] w-full rounded-[4px] object-cover"
      />

      <!-- Title -->
      <h3 class="mt-5 text-[18px] font-normal text-[#111827]">
        Build with Gemini
      </h3>

      <!-- Description -->
      <p class="mt-2 text-[17px] leading-[1.5] text-[#374151]">
        Move beyond basic chatbots. Join Google Cloud experts for a
        hands-on day building, scaling, and deploying secure,
        production-ready AI agents.
      </p>

      <!-- Date -->
      <p class="mt-7 text-[15px] text-[#374151]">
        <span>Aug - Oct / Multi-city</span>
      </p>

    </div>

    <!-- Card 3 -->
    <div class="w-full">

      <!-- Category -->
      <h4 class="mb-5 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide text-[#111827]">
        <span class="h-[6px] w-[6px] bg-[#4285f4]"></span>
        GOOGLE CLOUD
      </h4>

      <!-- Image -->
      <img
        :src="card3Img"
        alt="Google Cloud Summit Doha"
        class="h-[238px] w-full rounded-[4px] object-cover"
      />

      <!-- Title -->
      <h3 class="mt-5 text-[18px] font-normal text-[#111827]">
        Google Cloud Summit Doha
      </h3>

      <!-- Description -->
      <p class="mt-2 text-[17px] leading-[1.5] text-[#374151]">
        Join the annual Google Cloud event to discover the latest
        technological innovations in AI, security, application
        development, collaboration, and more.
      </p>

      <!-- Date -->
      <p class="mt-7 text-[15px] text-[#374151]">
        <span>September 22 / Doha, Qatar</span>
      </p>

    </div>

     <div class="pt-8">

            <button
              type="button"
              class="rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              VIEW ALL NEWS
            </button>

          </div>

  </div>

</section>

<!-- Continues -->

<section class="mx-auto mt-20 max-w-7xl px-6">
  <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

    <!-- Left Image -->
    <div class="w-full">
      <img
        :src="card4Img"
        alt="Community and events"
        class="h-[450px] w-full rounded-3xl object-cover"
      />
    </div>

     <!-- Right Content -->
    <div class="flex flex-col items-start">

      <!-- Logo -->
      <img
        :src="GoogleImg"
        alt="Community logo"
        class="mb-6 h-16 w-auto object-contain"
      />

      <!-- Heading -->
      <h1 class="mb-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
        Build and manage in one place
      </h1>

      <!-- Paragraph -->
      <p class="mb-8 max-w-xl text-lg leading-8 text-gray-600">
        Access specialized AI workspaces, learn from 700+ hands-on codelabs,
        and manage project from a centralized Building Hub as you move from prototype to production.
      </p>

        <!-- Button -->
       <div class="pt-8">

            <button
              type="button"
              class="rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              join the program
            </button>

          </div>

    </div>

  </div>
</section>



</template> 

  