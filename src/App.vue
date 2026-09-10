```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Gemini from './components/Gemini.vue'
import NewsAnnouncements from './components/NewsAnnouncements.vue'
import Community from './components/Community.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <main>
      
      <Hero />
      
    </main>
    <Gemini />
    <NewsAnnouncements />
    <Community />
    <Footer />
   
  </div>
    
</template>


