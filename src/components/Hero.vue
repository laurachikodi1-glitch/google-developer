<script setup lang="ts">
import geminiIcon from '../assets/192px.svg'
import heroBackground from '../assets/background-1.jpg'
import heroBackground2 from '../assets/background-google-antigravity 6.jpg'
import cloudImg from '../assets/cloud-img.jpg'
import andriodImg from '../assets/andriod-developer.jpg'
import GeminiImg from '../assets/Gemini-Api 3.jpg'
import chromeImg from '../assets/Chrome-developer.jpg'
import AgentImg from '../assets/Agent-Gemini.jpg'
import GoogleCloudImg from '../assets/logo-google-cloud.svg'
import GoogleAIStudioImg from '../assets/logo-google-ai-studio.svg'
import GoogleAntigravityImg from '../assets/logo-antigravity.svg'
import LogoAndriodDevelopersImg from '../assets/logo-android-developers.svg'
import LogoGeminiEnterprisesImg from '../assets/logo-gemini-enterprise.svg'
import LogoGeminiApiImg from'../assets/logo-gemini-api.svg'
import LogoChromeDevelopersImg from '../assets/logo-chrome-developers.svg'

</script>

<template>
  <!-- Hero Text -->
  <section class=" px-8 pt-10 flex flex-col items-center text-center">
    <div class=" max-w-[relative z-10 mx-auto 1440px] px-6 py-24 flex flex-col items-center justify-center gap-3"> 
      <h1 class="text-5xl font-normal leading-[1.05] tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
        Build with
        <img
          :src="geminiIcon"
          alt="Gemini"
          class="inline-block h-14.5 w-14.5 align-middle -mt-4" />
        Gemini
      </h1>

      <p class="max-w-2xl text-lg leading-8 text-gray-800 md:text-lg">
        Unlock AI models to build innovative apps and transform development workflows with tools across platforms.
      </p>
    </div>
  </section> 

  <!--Hero Background  -->
  <div class="grid grid-cols-3 gap-8 px-6 pt-4">
    <div class="col-span-1 min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${heroBackground})` }">
      <img
        :src="GoogleAIStudioImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>  

    <div class="col-span-2 min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${heroBackground2})` }">
      <img
        :src="GoogleAntigravityImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>


    <!-- Second Background -->
    <div class="col-span-2 min-h-[500px]  rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${cloudImg})` }">
      <img
        :src="GoogleCloudImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>

    <div class="col-span-1 min-h-[500px] rounded-2xl overflow-hidden   bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${andriodImg})` }">
      <img
        :src="LogoAndriodDevelopersImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>
  </div>  

  <!--  Three Cards -->
  <div class="grid grid-cols-3 gap-8 py-10 px-6 pt-4">
    <div class="min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${GeminiImg})` }">
      <img
        :src="LogoGeminiApiImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>  

    <div class="min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${chromeImg})` }">
      <img
        :src="LogoChromeDevelopersImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>

    <div class="min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-no-repeat p-8"
      :style="{ backgroundImage: `url(${AgentImg})` }">
      <img
        :src="LogoGeminiEnterprisesImg"
        alt="Google Cloud"
        class="inline-block h-3.5 w-auto align-middle -mt-4" />
    </div>  
  </div> 
</template>

