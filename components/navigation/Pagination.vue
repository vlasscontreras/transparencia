<template>
  <div class="px-5 bg-white py-5 flex items-stretch justify-center" :class="disabledClass">
    <button type="button" class="px-3 py-2 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none" :disabled="disabled" @click="prev">
      <ChevronIcon class="w-5 transform rotate-180" />
    </button>

    <div class="px-4 py-2 border-t border-b text-base text-gray-600 bg-white">
      {{ current }}
    </div>

    <button type="button" class="px-3 py-2 border text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none" :disabled="disabled" @click="next">
      <ChevronIcon class="w-5" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChevronIcon from '@/components/icons/Chevron.vue'

export default Vue.extend({
  components: {
    ChevronIcon
  },

  props: {
    current: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },

  computed: {
    disabledClass () {
      return this.disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''
    }
  },

  methods: {
    prev () {
      if (this.current > 1) {
        this.navigate(this.current - 1)
      }
    },

    next () {
      this.navigate(this.current + 1)
    },

    navigate (to: Number) {
      this.$emit('navigate', to)
    }
  }
})
</script>
