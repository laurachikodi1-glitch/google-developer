<script lang="ts">

</script>

<template>

  <!-- GEMINI API SECTION -->
<section class="relative min-h-[570px] overflow-hidden bg-black px-8 py-20 lg:px-24">

  <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

    <!-- LEFT SIDE -->
    <div>

      <!-- Label -->
      <div class="mb-8 flex items-center gap-2">
        <span class="h-1.5 w-1.5 bg-blue-500"></span>

        <span class="font-mono text-sm font-semibold text-white">
          GEMINI API
        </span>
      </div>

      <!-- Heading -->
      <h1 class="max-w-xl text-4xl font-normal leading-tight text-white lg:text-5xl">
        Integrate Gemini directly
        <br />
        into your apps
      </h1>

      <!-- Paragraph -->
      <p class="mt-6 max-w-xl text-lg leading-7 text-gray-400">
        Unleash the full potential of your applications by
        integrating Gemini's long context window and native
        multimodal reasoning to process massive codebases,
        complex media, and real-time agentic workflows with a
        single API.
      </p>

      <!-- Button -->
      <button
        class="mt-12 rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600"
      >
        View documentation
      </button>

    </div>


    <!-- RIGHT SIDE - CODE BOX -->
    <div class="w-full">

      <div class="overflow-hidden rounded-lg border border-gray-700 bg-[#15171a]">

        <!-- CODE TABS -->
        <div class="flex h-12 items-center justify-between border-b border-gray-700 px-5">

          <div class="flex h-full items-center gap-8">

            <div class="flex h-full items-center border-b-2 border-blue-500 text-sm text-blue-400">
              PYTHON
            </div>

            <div class="text-sm text-gray-500">
              JAVASCRIPT
            </div>

            <div class="text-sm text-gray-500">
              GO
            </div>

            <div class="text-sm text-gray-500">
              JAVA
            </div>

            <div class="text-sm text-gray-500">
              REST
            </div>

          </div>

          <!-- COPY BUTTON -->
          <button
            class="flex h-8 w-8 items-center justify-center rounded bg-white text-black"
          >
            📋
          </button>

        </div>


        <!-- CODE CONTENT -->
        <div class="overflow-x-auto p-6">

          <div class="font-mono text-sm leading-7 whitespace-nowrap">

            <div>
              <span class="text-blue-400">from</span>
              <span class="text-pink-400"> google </span>
              <span class="text-blue-400">import</span>
              <span class="text-white"> genai</span>
            </div>

            <br />

            <div class="text-white">
              client = genai.Client()
            </div>

            <br />

            <div class="text-white">
              response = client.models.generate_content(
            </div>

            <div class="pl-4">
              <span class="text-white">model=</span>
              <span class="text-green-400">"gemini-3.5-flash"</span>,
            </div>

            <div class="pl-4">
              <span class="text-white">contents=</span>
              <span class="text-green-400">
                "Explain how AI works in a few words"
              </span>,
            </div>

            <div class="text-white">
              )
            </div>

            <br />

            <div>
              <span class="text-pink-400">print</span>
              <span class="text-white">(response.text)</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  
</template>



