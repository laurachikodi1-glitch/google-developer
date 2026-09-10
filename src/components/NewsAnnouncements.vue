<script setup>
import NewsAnnouncementsImage from '../assets/News-Announcement.png'

import { ref } from 'vue'

const openItem = ref(0)

const newsItems = [
  {
    category: 'GOOGLE PLAY',
    title: 'New quality requirements on Google Play',
    description:
      'Raising the quality bar: Prepare for new Play standards in memory, code, and onboarding.',
  },
  {
    category: 'AI AGENTS',
    title: 'Treat agent prompts like software artifacts',
    description: '',
  },
  {
    category: 'GOOGLE PLAY',
    title: 'Play billing and fee updates',
    description: '',
  },
  {
    category: 'ANTIGRAVITY CLI',
    title: 'Gemini CLI Transition to Antigravity',
    description: '',
  },
]
 
</script>

<template>

  <section class="w-full bg-white px-6 py-20 lg:px-24">

    <div class="mx-auto max-w-7xl">

      <!-- SECTION TITLE -->
      <h2
        class="mb-10 text-4xl font-normal tracking-tight text-[#0b1f33] lg:text-[40px]"
      >
        News & Announcements
      </h2>


      <!-- MAIN CONTENT -->
      <div
        class="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_0.9fr]">
      

        <!-- LEFT: NEWS LIST -->
        <div class="w-full">

          <!-- NEWS ITEMS -->
          <div
            v-for="(item, index) in newsItems"
            :key="item.title"
            class="border-t border-gray-200">
          

            <!-- NEWS ROW -->
            <button
              type="button"
              class="grid w-full grid-cols-[180px_1fr_32px] gap-5 py-6 text-left"
              @click="openItem = openItem === index ? -1 : index">
            

              <!-- CATEGORY -->
              <div class="flex items-start gap-2 pt-1">

                <span
                  class="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue-500">
                </span>

                <span
                  class="font-mono text-[13px] font-medium tracking-wide text-[#0b1f33]">
                
                  {{ item.category }}
                </span>

              </div>


              <!-- TITLE -->
              <span
                class="text-[18px] font-normal leading-6 text-[#0b1f33]">
              
                {{ item.title }}
              </span>


              <!-- PLUS / MINUS -->
              <span
                class="flex h-8 w-8 items-center justify-center bg-[#f1f3f6] text-lg text-[#0b1f33]">
              
                {{ openItem === index ? '−' : '+' }}
              </span>

            </button>


            <!-- EXPANDED CONTENT -->
            <div
              v-if="openItem === index"
              class="grid grid-cols-[180px_1fr_32px] gap-5 pb-8">
            

              <!-- EMPTY SPACE -->
              <div></div>


              <!-- DESCRIPTION -->
              <div>

                <p
                  v-if="item.description"
                  class="max-w-[550px] text-[17px] leading-6 text-[#31465a]">
                
                  {{ item.description }}
                </p>


                <!-- LEARN MORE -->
                <a
                  v-if="item.description"
                  href="#"
                  class="mt-7 inline-block font-mono text-[13px] font-medium tracking-wide text-blue-600 underline underline-offset-4"
                >
                  LEARN MORE
                </a>

              </div>


              <!-- EMPTY SPACE -->
              <div></div>

            </div>

          </div>


          <!-- BOTTOM BORDER -->
          <div class="border-t border-gray-200"></div>


          <!-- VIEW ALL NEWS BUTTON -->
          <div class="pt-8">

            <button
              type="button"
              class="rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              VIEW ALL NEWS
            </button>

          </div>

        </div>


        <!-- RIGHT: IMAGE -->
        <div class="flex items-start justify-center">

          <img
            :src="NewsAnnouncementsImage"
            alt="News and announcements"
            class="w-full max-w-[425px] rounded-xl object-cover"
          />

        </div>

      </div>

    </div>

  </section>

</template>

