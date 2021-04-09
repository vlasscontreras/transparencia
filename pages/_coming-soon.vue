<template>
  <div class="text-center py-10 sm:py-14 md:py-20">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Proximamente
    </h3>
    <p class="mt-2 mb-6 text-sm text-gray-500">
      Este recurso aún no está disponible.
    </p>

    <nuxt-link to="/" class="group relative table py-2 pl-10 pr-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-auto">
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <Home class="h-5 w-5 text-green-500 group-hover:text-green-400" />
      </span>

      Regresar
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Home from '@/components/icons/Home.vue'

export default Vue.extend({
  components: {
    Home
  }
})
</script>
