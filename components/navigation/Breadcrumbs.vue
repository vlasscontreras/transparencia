<template>
  <nav class="flex items-center text-sm font-medium">
    <nuxt-link to="/" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
      Inicio
    </nuxt-link>

    <Chevron v-if="to && title" class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" />

    <nuxt-link v-if="to && title" :to="to" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
      {{ title }}
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import Chevron from '@/components/icons/Chevron.vue'

export default Vue.extend({
  components: {
    Chevron
  },

  props: {
    to: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
