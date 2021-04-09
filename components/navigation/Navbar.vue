<template>
  <nav class="bg-[#24292e] p-4">
    <div class="container mx-auto flex items-center">
      <nuxt-link to="/" class="inline-block mr-5 text-white">
        <Logo class="w-10" />
      </nuxt-link>

      <button class="md:hidden focus:outline-none ml-auto text-white" @click="toggle">
        <Burger class="w-6 h-6" />
      </button>

      <div class="bg-white md:bg-transparent fixed md:relative md:flex flex-grow items-center p-5 md:p-0 text-gray-700 md:text-white top-0 right-0 w-72 shadow-lg md:shadow-none min-h-screen md:min-h-full z-10" :class="{ hidden: !expanded }">
        <div class="md:hidden pb-3 border-b text-right">
          <button class="focus:outline-none" @click="toggle">
            <Times />
          </button>
        </div>

        <NavMenu class="flex flex-col md:flex-row md:space-x-4 flex-grow divide-y md:divide-none" @click="toggle" />
        <NavCta class="flex space-x-4 md:space-x-4 items-center justify-center mt-5 md:mt-0" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import NavMenu from '@/components/navigation/NavMenu.vue'
import NavCta from '@/components/navigation/NavCta.vue'
import Burger from '@/components/icons/Burger.vue'
import Times from '@/components/icons/Times.vue'

export default Vue.extend({
  components: {
    NavMenu,
    NavCta,
    Burger,
    Times
  },

  data: () => ({
    expanded: false
  }),

  methods: {
    toggle () {
      this.expanded = !this.expanded
    }
  }
})
</script>
