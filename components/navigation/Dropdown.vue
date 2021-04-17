<template>
  <div v-click-outside="toggle" class="relative inline-block text-left">
    <button
      id="options-menu"
      type="button"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      aria-expanded="true"
      aria-haspopup="true"
      @click="toggle"
    >
      {{ current }}
      <Chevron class="h-5 w-5 transform rotate-90 ml-2" />
    </button>

    <transition name="slide-fade">
      <div v-if="expanded" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1" role="none">
          <nuxt-link
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            @click.native="toggle"
          >
            {{ item.text }}
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Chevron from '@/components/icons/Chevron.vue'
import clickOutside from '@/directives/clickOutside'

export default Vue.extend({
  components: {
    Chevron
  },

  directives: {
    clickOutside
  },

  props: {
    current: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    expanded: false
  }),

  methods: {
    toggle (state: Boolean | Event): void {
      if (typeof state === 'object') {
        this.expanded = !this.expanded
        return
      }

      this.expanded = state
    }
  }
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 100ms ease-out;
}

.slide-fade-leave-active {
  transition: all 75ms ease-in;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
